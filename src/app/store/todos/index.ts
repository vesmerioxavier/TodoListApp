import { TodosState, TodosTypes } from './types';
import { Reducer } from 'redux';
const INITIAL_STATE: TodosState = {
    data: [],
    error: false,
    loading: false
}
// we filter the we are that we want to share in the app
const reducer: Reducer<TodosState> = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TodosTypes.LOAD_REQUEST:
            return { ...state, loading: true };
        case TodosTypes.LOAD_SUCCESS:
            return { ...state, loading: false, error: false, data: action.payload.data };
        case TodosTypes.LOAD_FAILURE:
            return { ...state, loading: false, error: true, data: [] };
        default:
            return state;
    }
}

export default reducer;