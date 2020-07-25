import React, { Component } from 'react';

import './App.css';
import InputBox from './components/InputBox';
import BtnApp from './components/BtnApp';
import Card from './components/Card';

class App extends Component {
  state = {
    inpValue: '',
    todoList: ['task2'],
  };
  handelChangeInput = (e) => {
    this.setState({
      inpValue: e.target.value,
    });
  };
  handleSubmitBtn = () => {
    this.setState({
      todoList: [...this.state.todoList, this.state.inpValue],
      inpValue: '',
    });
  };
  handleTaskDelete = (allTodo) => {
    const filtered = this.state.todoList.filter((td) => td !== allTodo);
    this.setState({
      todoList: filtered,
    });
  };
  render() {
    return (
      <div className='App'>
        <div className='heading'>
          <h2>What’s love got to-do</h2>
        </div>
        <div className='inp-btn'>
          <InputBox
            placeholderPrp='Add A New Task'
            onChangeProp={this.handelChangeInput}
            valueProp={this.state.inpValue}
          />
          <BtnApp onSubmitBtn={this.handleSubmitBtn} />
        </div>
        <p>new task: {this.state.inpValue}</p>
        {this.state.todoList.map((todo) => (
          <Card todoProp={todo} btnDelete={() => this.handleTaskDelete(todo)} />
        ))}
      </div>
    );
  }
}

export default App;
