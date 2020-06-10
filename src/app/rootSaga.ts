import { all, takeLatest } from 'redux-saga/effects';
import { TodosTypes } from './store/todos/types';
import { load } from './store/todos/sagas';

// 
export default function* rootSaga() {
    return yield all([
        takeLatest(TodosTypes.LOAD_REQUEST, load)
    ]);
}