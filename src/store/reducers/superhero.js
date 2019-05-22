// Arquitechture DUCK

// Actions
export const types = {
    HANDLE_CLICK: 'HANDLE_CLICK',
    GET_SUPERHEROES_REQUESTED: 'GET_SUPERHEROES_REQUESTED',
    GET_SUPERHEROES_SUCCEEDED: 'GET_SUPERHEROES_SUCCEEDED',
    GET_SUPERHEROES_FAILED: 'GET_SUPERHEROES_FAILED',
}


const initialState = {
    superheroesList: null,
    heroSelected: null,
    loading: false,
    error: false,
    success: false,
    errorMessage: null,
};

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case types.HANDLE_CLICK: {
            return { ...state, heroSelected: action.payload }
        }
        case types.GET_SUPERHEROES_REQUESTED: {
            return { ...state, loading: true }
        }
        case types.GET_SUPERHEROES_SUCCEEDED: {
            return {
                ...state,
                loading: false,
                superheroesList: action.payload,
                error: false,
                success: true,
            }
        }
        case types.GET_SUPERHEROES_FAILED: {
            return {
                ...state,
                loading: false,
                superheroesList: null,
                error: true,
                success: false,
                errorMessage: action.payload,
            }
        }
        default:
            return state;
    }
}

// Actions Creators
export function handleClick(hero) {
    return {
        type: types.HANDLE_CLICK,
        payload: hero,
    };
}