import { createReducer, on } from '@ngrx/store';
import { initialState } from './todo.state';
import * as TodoActions from './todo.actions';

export const todosReducer = createReducer(
    initialState,

    // Load Todos
    on(TodoActions.loadTodos, (state) => ({ ...state, loading: true })),
    on(TodoActions.loadTodosSuccess, (state, { todos }) => ({
        ...state,
        todos,
        loading: false,
    })),
    on(TodoActions.addTodoFailure, (state, { error }) => ({ ...state, error, loading: false })),

    // Add Todo
    on(TodoActions.addTodo, (state) => ({ ...state, loading: true })),
    on(TodoActions.addTodoSuccess, (state, { todo }) => ({ ...state, todo, loading: false })),
    on(TodoActions.addTodoFailure, (state, { error }) => ({ ...state, error, loading: false })),

    // Remove Todo
    on(TodoActions.removeTodo, (state) => ({ ...state, loading: true })),
    on(TodoActions.removeTodoSuccess, (state, { id }) => ({ ...state, id, loading: false })),
    on(TodoActions.removeTodoFailure, (state, { error }) => ({ ...state, error, loading: false })),

    // Toggle Todo Complete
    on(TodoActions.toggleTodo, (state) => ({ ...state, loading: true })),
    on(TodoActions.toggleTodoSuccess, (state, { id }) => ({
        ...state,
        todos: state.todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)),
        loading: false,
    })),
    on(TodoActions.toggleTodoFailure, (state, { error }) => ({ ...state, error, loading: false }))
);
