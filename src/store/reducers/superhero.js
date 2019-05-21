// Arquitechture DUCK

// Actions
export const types = {
    GET_SUPERHEROES_REQUESTED: 'GET_SUPERHEROES_REQUESTED',
    GET_SUPERHEROES_SUCCEEDED: 'GET_SUPERHEROES_SUCCEEDED',
    GET_SUPERHEROES_FAILED: 'GET_SUPERHEROES_FAILED',
}


const initialState = {
    superheroesList: [],
    loading: false,
    error: false,
    success: false,
    errorMessage: null,
};

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
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