import { takeEvery, all } from 'redux-saga/effects'
import { fetchSuperheroes } from './superhero';
import { types as superheroTypes } from '../reducers/superhero';


export default function* rootSaga() {
    yield all([
        takeEvery(superheroTypes.GET_SUPERHEROES_REQUESTED, fetchSuperheroes),
    ])
}