import {InferActionsTypes} from "./store";
export type initialStateType = typeof initialState

const initialState = {
    value: 0
}


export const reducer = (state = initialState, action: ActionsType): initialStateType => {
    switch (action.type) {
        case "INCREMENT_VALUE":
            return {
                value: state.value + 1
            }
        default:
            return state
    }

}


export type ActionsType = InferActionsTypes<typeof actions>

export const actions = {
    incrementValue: () => ({type: "INCREMENT_VALUE"} as const)
}
