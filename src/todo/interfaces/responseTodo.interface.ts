import type { Todo } from "./todo.interface";

export interface ResponseTodoList {
  count:    number;
  next:     null;
  previous: null;
  results:  Todo[];
}

