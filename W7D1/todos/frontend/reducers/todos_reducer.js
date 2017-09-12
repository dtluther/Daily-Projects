import { merge } from 'lodash/merge';
import { RECEIVE_TODO, RECEIVE_TODOS } from '../actions/todo_actions';


const initialState = {
  1: {
    id: 1,
    title: 'wash car',
    body: 'with soap',
    done: false
  },
  2: {
    id: 2,
    title: 'wash dog',
    body: 'with shampoo',
    done: true
  },
};

const todosReducer = (oldState = initialState, action) => {
  switch(action.type) {
      case RECEIVE_TODOS:
        let nextState = {};
        Object.values(action.todoList).forEach( todoItem => {
          nextState[todoItem.id] = todoItem;
        });
        return nextState;

      case RECEIVE_TODO:
        nextState = Object.assign({}, oldState);
        const todo = {
          id: action.todo.id,
          title: action.todo.title,
          body: action.todo.body,
          done: action.todo.done
        };
        nextState[action.todo.id] = todo;
        return nextState;
      default:
        return oldState;
  }
};

export default todosReducer;
