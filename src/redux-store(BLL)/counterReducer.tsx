import {InferActionsTypes, baseThunkType} from "./store";
import {counterServiceAPI} from "../api(DAL)/api";

type initialStateType = typeof initialState

const initialState = {
    value: 0
}


export const counterReducer = (state: initialStateType = initialState, action: ActionsType): initialStateType => {
    switch (action.type) {
        case "COUNTER/SET_COUNTER_VALUE":
            return {
                ...state, value: action.value
            }
        default:
            return state
    }

}


export type ActionsType = InferActionsTypes<typeof actions>

export const actions = {
    setCounterValue: (value: number) => ({type: "COUNTER/SET_COUNTER_VALUE", value} as const),
}


//_________________ thunk-creators____________________

type thunkType = baseThunkType<ActionsType>

export const setCounterValue = (): thunkType => async (dispatch, getState) => {
    let result = await counterServiceAPI.getCounter()
    dispatch(actions.setCounterValue(result.value))
}

export const incrementCounterValue = (value: number): thunkType => async (dispatch) => {
    let result = await counterServiceAPI.updateCounter(value)
    dispatch(actions.setCounterValue(value))

}
