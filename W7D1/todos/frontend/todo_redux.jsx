import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import { receiveTodos, receiveTodo } from './actions/todo_actions.js';
import configureStore from './store/store';
import allTodos from './reducers/selectors';

// TODO for testing
window.receiveTodos = receiveTodos;
window.receiveTodo = receiveTodo;

window.allTodos = allTodos;

const store = configureStore();
window.store = store;


document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(<Root store={store}/>, document.getElementById('root'));
});
