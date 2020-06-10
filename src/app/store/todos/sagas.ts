import { call, put } from 'redux-saga/effects';
import api from '../../Http/services/api';
import { loadSuccess, loadFailure } from './actions';

// we define the route for the saga requisition
export function* load() {
    try {
        const response = yield call(api.get, 'todos');
        yield put(loadSuccess(response.data))
    } catch (err) {
        yield put(loadFailure());
    }
}