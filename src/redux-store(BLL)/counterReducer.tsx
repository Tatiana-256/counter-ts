import {AppStateType, baseThunkType, InferActionsTypes} from "./store";
import {counterServiceAPI} from "../api(DAL)/api";
import {actionsApp, appActionsType} from "./appReducer";

type initialStateType = typeof initialState

const initialState = {
    value: 0,
}


export const counterReducer = (state: initialStateType = initialState, action: ActionsType): initialStateType => {
    switch (action.type) {
        case "COUNTER/SET_COUNTER_VALUE":
            return {...state, value: action.value}
        default:
            return state
    }

}


export type ActionsType = InferActionsTypes<typeof actions> | appActionsType


export const actions = {
    setCounterValue: (value: number) => ({type: "COUNTER/SET_COUNTER_VALUE", value} as const),
}


//_________________ thunk-creators____________________

type thunkType = baseThunkType<ActionsType>
export const setCounterValue = (): thunkType => async (dispatch, getState) => {
    dispatch(actionsApp.setRequestStatus("IN-PROGRESS"))
    try {
        let result = await counterServiceAPI.getCounter()
        dispatch(actions.setCounterValue(result.value))
        dispatch(actionsApp.setRequestStatus("SUCCESS"))
    } catch (e) {
        console.error(e)
        dispatch(actionsApp.setRequestStatus("ERROR"))
    }

}

export const incrementCounterValue = (value: number): thunkType => async (dispatch, getState: () => AppStateType) => {
    dispatch(actionsApp.setRequestStatus("IN-PROGRESS"))
    try {
        let result = await counterServiceAPI.updateCounter(value)
        dispatch(actions.setCounterValue(value))
        dispatch(actionsApp.setRequestStatus("SUCCESS"))
    } catch (e) {
        console.error(e)
        dispatch(actionsApp.setRequestStatus("ERROR"))
    }
}
