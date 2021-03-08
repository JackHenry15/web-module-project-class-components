import React from 'react';

import "./components/Todo.css";
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';


const currentList = [];

class App extends React.Component {
  // you will need a place to store your state in this component.
  constructor() {
    super();
    this.state = {
      currentList: currentList,
      count: 0,
    };
  }
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

toggleTask = (clickedOnId) => {
  this.setState({
    currentList: this.state.currentList.map((task) => {
      if (task.id === clickedOnId) {
        return {
          ...task,
          completed: !task.completed,
        };
      } else {
        return task;
      }
    }),
  });
};

addTask = (taskName) => {
  const newTask = {
    name: taskName,
    id: new Date(),
    completed: false,
  };
  this.setState({
    currentList: [...this.state.currentList, newTask],
  });
};

clearTask = (completed) => {
  let filteredList = this.state.currentList.filter(task => task.completed !== true)
  //all completed values that are NOT true
  this.setState({currentList: filteredList})
};



  render() {
    return (
      <div>
        <div>
          <h2>Todo List:</h2>
          <TodoForm clearTask={this.clearTask} addTask={this.addTask} />
        </div>
        <TodoList 
          toggleTask={this.toggleTask}
          currentList={this.state.currentList}        
        />
      </div>
    );
  }
}

export default App;
