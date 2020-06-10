import { action } from 'typesafe-actions';
import { TodosTypes, Todo } from './types';

// we define the application actions
export const loadRequest = () => action(TodosTypes.LOAD_REQUEST);
export const loadSuccess = (data: Todo[]) => action(TodosTypes.LOAD_SUCCESS, { data });
export const loadFailure = () => action(TodosTypes.LOAD_FAILURE);