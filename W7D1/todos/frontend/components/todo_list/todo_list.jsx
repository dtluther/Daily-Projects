import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';

const TodoList = ({ todos, receiveTodo }) => {
  console.log(todos);
  return (
    <div>
      <TodoForm receiveTodo={receiveTodo} />
      <ul>
        {todos.map( todo => <TodoListItem todo={todo} />)}
      </ul>

    </div>
  )
;};

export default TodoList;
