type InitialStateType = typeof initialState
const initialState = {
    value: 0,
    startValue: 0,
    maxValue: 5,
    error: ''
}
export type ActionType = IncrementCountACType
    | ResetCountACType
    | SetStartValueACType
    | SetMaxValueACType
    | SetValuesACType

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
        case 'SET_START_VALUE': {
            return {
                ...state,
                startValue: action.value
            }
        }

        case 'SET_MAX_VALUE': {
            return {
                ...state,
                maxValue: action.value
            }
        }
        case 'SET_VALUES': {
            return {
                ...state,
                value: state.startValue
                
            }
        }
        default:
            return state
    }
}

export type IncrementCountACType = ReturnType<typeof incrementCountAC>
export type ResetCountACType = ReturnType<typeof resetCountAC>
export type SetStartValueACType = ReturnType<typeof setStartValueAC>
export type SetMaxValueACType = ReturnType<typeof setMaxValueAC>
export type SetValuesACType = ReturnType<typeof setValuesAC>

//actions
export const incrementCountAC = () => {
    return { type: 'INCREMENT_COUNT' } as const
}

export const resetCountAC = () => {
    return { type: 'RESET_COUNT' } as const
}

export const setStartValueAC = (value:number) => {
    return { type: 'SET_START_VALUE', value } as const
}
export const setMaxValueAC = (value:number) => {
    return { type: 'SET_MAX_VALUE', value } as const
}
export const setValuesAC = () => {
    return { type: 'SET_VALUES'} as const
}
