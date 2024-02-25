import { getEnvironments } from "../../helpers";
import type { Todo } from "../";

const { API_URL } = getEnvironments()

interface Props {
  page?: number;
  take?: number;
  isDone?: boolean;
}

interface Response {
  currentPage: number;
  totalPages: number;
  todos: Todo[];
}

export const getTodos = async({ page = 1, take = 8, isDone }: Props): Promise<Response> => {
  if (isNaN(Number(page))) page = 1;
  if (page < 1) page = 1;

  try {

    const response = await fetch(`${API_URL}/todo/`);

    if (!response.ok) {
      throw new Error('Hubo un error al obtener las tareas.')
    }

    const todos = await response.json();

    const totalPages = 0;

    return {
      currentPage: page,
      totalPages,
      todos
    }
  } catch (error) {
    throw new Error('Hubo un error al obtener las tareas.')
  }
}
