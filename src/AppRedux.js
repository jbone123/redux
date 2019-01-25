import React, { Component } from 'react'
import 'antd/dist/antd.css'
import {Input,Button,List} from 'antd';
import store from './store';
import {CHANGE_INPUT_VALUE,ADD_TODO_LIST, DELETE_TODO_LIST} from './store/actiontypes'
import {getInputChangeAction, getAddTodoListAction, getDeleteTodoAction} from './store/actionCreators'

export default class AppRedux extends Component {
    constructor(props){
        super(props);
        this.state = store.getState()
        // console.log(this.state,'999')
        store.subscribe(this.handleStoreChange)
    }  
    
  render() {
    return (
      <div style={{marginTop:'10px',marginLeft:'100px'}}>
        <div>
            <Input 
                placeholder='todo info' 
                value={this.state.inputValue} 
                style={{width:'300px', marginRight:'10px'}} 
                onChange={this.handleInputChange}
                />
            <Button type='primary' onClick={this.handleButton}>提交</Button>
            <List
            style={{marginTop:'20px',width:'300px'}}
            bordered
            dataSource={this.state.list}
            renderItem={item => (<List.Item onClick={this.deleteItem}>{item}</List.Item>)}
            />
        </div>
      </div>
    )
  }
    handleInputChange=(e)=>{
        // const action ={
        //     type:CHANGE_INPUT_VALUE,
        //     value: e.target.value
        // }
        const action = getInputChangeAction(e.target.value)
        store.dispatch(action);
    } 

    handleStoreChange=()=>{
        this.setState(store.getState())
    }
    handleButton=()=>{
        // const action={
        //     type:ADD_TODO_LIST,
        //     // value:
        // }
        const action = getAddTodoListAction()
        store.dispatch(action);
    }
    deleteItem=()=>{
        // const action={
        //     type: DELETE_TODO_LIST,
        // }
        const action = getDeleteTodoAction()
        store.dispatch(action)       
    }
}


