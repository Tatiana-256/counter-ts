import {InferActionsTypes} from "./store";

type initialStateType = typeof initialState
export type requestStatusType = "NONE" | "IN-PROGRESS" |"SUCCESS" | "ERROR"

const initialState = {
    requestStatus: "NONE" as requestStatusType
}


export const appReducer = (state = initialState, action: appActionsType): initialStateType => {
    switch (action.type) {
        case "APP/SET_REQUEST_STATUS":
            return {...state, requestStatus: action.status}
        default:
            return state
    }

}


export type appActionsType = InferActionsTypes<typeof actionsApp>

export const actionsApp = {
    setRequestStatus: (status: requestStatusType) => ({
        type: "APP/SET_REQUEST_STATUS", status
    } as const)
}
