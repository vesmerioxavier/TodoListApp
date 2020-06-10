import { createStore, applyMiddleware, Store } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { TodosState } from './store/todos/types';
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';
export interface ApplicationState {
    todos: TodosState
}

// here we connect the middleware that manages the api with redux, to obtain the states of the api in every application
const sagaMiddleware = createSagaMiddleware();

const store: Store<ApplicationState> = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;