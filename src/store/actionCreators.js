import {CHANGE_INPUT_VALUE,ADD_TODO_LIST, DELETE_TODO_LIST} from './actiontypes'

export const getInputChangeAction=(value)=>({
    type: CHANGE_INPUT_VALUE,
    value
})

export const getAddTodoListAction=()=>({
    type: ADD_TODO_LIST,
    
})

export const getDeleteTodoAction=()=>({
    type:  DELETE_TODO_LIST,
    
})