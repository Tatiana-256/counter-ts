import {baseThunkType, InferActionsTypes} from "./store";
import {counterServiceAPI} from "../api(DAL)/api";
import {appActionsType} from "./appReducer";
import {actionsApp} from "./appReducer";

type initialStateType = typeof initialState

const initialState = {
    maxValue: 10,
    startValue: 0,
}


export const settingsReducer = (state = initialState, action: ActionsType): initialStateType => {
    switch (action.type) {
        case "COUNTER-SETTINGS/SET_MAX_VALUE":
            return {...state, maxValue: action.maxValue}
        case  "COUNTER-SETTINGS/SET_START_VALUE":
            return {...state, startValue: action.startValue}
        default:
            return state
    }

}


export type ActionsType = InferActionsTypes<typeof actions> | appActionsType

export const actions = {
    setCounterMaxValue: (maxValue: number) => ({
        type: "COUNTER-SETTINGS/SET_MAX_VALUE", maxValue
    } as const),
    setCounterStartValue: (startValue: number) => ({
        type: "COUNTER-SETTINGS/SET_START_VALUE", startValue
    } as const)
}


//_________________ thunk-creators____________________

type thunkType = baseThunkType<ActionsType>


export const setCounterSettings = (): thunkType => async (dispatch, getState) => {
    dispatch(actionsApp.setRequestStatus("IN-PROGRESS"))
    try {
        let result = await counterServiceAPI.getCounterSettings()
        dispatch(actions.setCounterMaxValue(result.maxValue))
        dispatch(actions.setCounterStartValue(result.startValue))
        dispatch(actionsApp.setRequestStatus("SUCCESS"))
    } catch (e) {
        console.error(e)
        dispatch(actionsApp.setRequestStatus("ERROR"))
    }
}

export const incrementCounterMaxValue = (value: number): thunkType => async (dispatch) => {
    dispatch(actionsApp.setRequestStatus("IN-PROGRESS"))
    try {
        let result = await counterServiceAPI.updateCounterMaxValue(value)
        dispatch(actions.setCounterMaxValue(value))
        dispatch(actionsApp.setRequestStatus("SUCCESS"))
    } catch (e) {
        console.error(e)
        dispatch(actionsApp.setRequestStatus("ERROR"))
    }

}

export const incrementCounterStartValue = (value: number): thunkType => async (dispatch) => {
    dispatch(actionsApp.setRequestStatus("IN-PROGRESS"))
    try {
        let result = await counterServiceAPI.updateCounterStartValue(value)
        dispatch(actions.setCounterStartValue(value))
        dispatch(actionsApp.setRequestStatus("SUCCESS"))
    } catch (e) {
        console.error(e)
        dispatch(actionsApp.setRequestStatus("ERROR"))
    }

}

