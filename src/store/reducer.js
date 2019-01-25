import {CHANGE_INPUT_VALUE,ADD_TODO_LIST, DELETE_TODO_LIST} from './actiontypes'

const defaultState = {
    inputValue: '',
    list: [],
}


//reducer 可以接受state但是不能修改state
export default (state=defaultState, action) => {
    if(action.type === CHANGE_INPUT_VALUE){
        const newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value
        return newState

    }
    if(action.type === ADD_TODO_LIST){
        const newState = JSON.parse(JSON.stringify(state))
        newState.list.push(newState.inputValue)
        newState.inputValue=''
        return newState
    }
    if(action.type === DELETE_TODO_LIST){
        const newState = JSON.parse(JSON.stringify(state))
        newState.list.splice(action.index,1)    //action.index获取数组的下标
        console.log(action.index,'删除todo')
        return newState
    }
    return state;
}