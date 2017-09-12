export const RECEIVE_TODOS = "RECEIVE_TODOS";
export const RECEIVE_TODO = "RECEIVE_TODO";


export const receiveTodos = (todoList) => ({
  type: RECEIVE_TODOS,
  todoList
});

export const receiveTodo = (todo) => ({
  type: RECEIVE_TODO,
  todo
});
