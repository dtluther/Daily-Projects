

const allTodos = (state) => (
  Object.keys(state.todos).map( todoId => state.todos[todoId])
);

export default allTodos;
