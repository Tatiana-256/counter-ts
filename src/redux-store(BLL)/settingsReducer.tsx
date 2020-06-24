import {InferActionsTypes} from "./store";

type initialStateType = typeof initialState

const initialState = {
    maxValue: 0,
    startValue: 0
}


export const settingsReducer = (state = initialState, action: ActionsType): initialStateType => {
    switch (action.type) {
        // case "INCREMENT_VALUE":
        //     return {
        //         value: state.value + 1
        //     }
        default:
            return state
    }

}


export type ActionsType = InferActionsTypes<typeof actions>

export const actions = {
    // incrementValue: () => ({type: "INCREMENT_VALUE"} as const)
}
