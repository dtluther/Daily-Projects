import React from 'react';

const TodoListItem = ({todo}) => {
  // console.log(todo);
  // console.log(todo.title);
  return <li>{todo.title}</li>;
};

export default TodoListItem;
