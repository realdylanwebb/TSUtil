/**
 * Type narrowing function for an optional or null Object
 */
export function isPresent<P> (item?: P | null) : item is P {
    return item !== undefined && item !== null
}

/**
 * Typed Action and Action Creator for React's useReducer
 */
export interface Action<P> {
    type: string
    payload: P
}

export interface ActionCreator<P> {
    (payload: P) : Action<P>
    type: string
}

export function actionCreator<P> (type: string) {
    const ac = (payload: P) => ({
        type,
        payload
    })
    return Object.assign(ac, { type })
}

function isType<P> (action: Action<any>, actionCreator: ActionCreator<P>) : action is Action<P> {
    return action.type === actionCreator.type
}
