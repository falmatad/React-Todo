// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';

import Todo from './Todo';


const TodoList = props => {
  // const sortedList = props.groceries.sort((a, b) => a.purchased - b.purchased);

  return (
    <div className="todo-list">
      {props.items.map(item => (
        <Todo
          key={item.id}
          item={item}
          toggleCompleted={props.toggleCompleted}
        />
      ))}
       <button className="clear-btn" onClick={() =>(props.clearCompleted())}>
        Clear Purchased
      </button>
    </div>
  )};

export default TodoList;