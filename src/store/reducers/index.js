import { combineReducers } from 'redux';
import SuperheroReducer from './superhero';

const rootReducer = combineReducers({
    superhero: SuperheroReducer,
});

export default rootReducer;