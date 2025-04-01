import { Todo } from '../models/Todo';

export interface TodoState {
  todos: Todo[];
  error: string | undefined;
  loading: boolean;
}

export const initialState: TodoState = {
  todos: [],
  error: '',
  loading: false,
};
