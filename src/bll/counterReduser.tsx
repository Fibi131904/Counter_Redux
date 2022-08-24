type InitialStateType = typeof initialState
const initialState = {
    value: 0,
    startValue: 0,
    //  maxValue: 5,
}
export type ActionType = IncrementCountACType
| ResetCountACType

export const counterReduser = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case 'INCREMENT_COUNT': {
            return {
                ...state,
                value: state.value + 1
            }
        }
        case 'RESET_COUNT': {
            return {
                ...state,
                value: state.startValue
            }
        }
        default: return state
    }
}

export type IncrementCountACType = ReturnType<typeof incrementCountAC>
export type ResetCountACType = ReturnType<typeof resetCountAC>

//actions
export const incrementCountAC = () => {
    return {
        type: 'INCREMENT_COUNT'
    } as const
}
export const resetCountAC=()=>{
    return {
        type: 'RESET_COUNT'
    } as const
}
