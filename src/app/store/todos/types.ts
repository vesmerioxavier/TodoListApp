// this is the global file of the types of data that we will share in redux

// Action types

export enum TodosTypes {
    LOAD_REQUEST = '@repositories/LOAD_REQUEST',
    LOAD_SUCCESS = '@repositories/LOAD_SUCCESS',
    LOAD_FAILURE = '@repositories/LOAD_FAILURE'
}

// Data types
export interface Todo {
    userId: number
    id: number
    title: string
    completed: boolean
}

// State type
export interface TodosState {
    readonly data: Todo[]
    readonly loading: boolean
    readonly error: boolean
}

