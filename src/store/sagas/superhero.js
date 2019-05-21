import { call, put, delay } from 'redux-saga/effects'
import {
    getSuperheroes,
} from '../api';
import { types as superheroTypes } from '../reducers/superhero';

function* fetchSuperheroes(action) {
    try {
        const response = yield call(getSuperheroes);
        console.log('la respuesta es', response.data.data.results)
        yield delay(500) // Loader simulator
        yield put({ type: superheroTypes.GET_SUPERHEROES_SUCCEEDED, payload: response.data.data.results });
    } catch (e) {
        yield delay(500) // Loader simulator
        yield put({ type: superheroTypes.GET_SUPERHEROES_FAILED, payload: e });
    }
}

export { fetchSuperheroes };