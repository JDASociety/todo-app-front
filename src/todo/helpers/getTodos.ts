import { getEnvironments } from "../../helpers";
import type { ResponseTodoList, Todo } from "../";

const { API_URL } = getEnvironments()

export interface GetTodosProps {
  page?: number;
  take?: number;
  isDone?: boolean;
  token: string;
  startDate?: string | Date;
  endDate?: string | Date;
}

interface Response {
  currentPage: number;
  totalPages: number;
  todos: Todo[];
}

export const getTodos = async({ token, page = 1, take = 5, isDone, endDate, startDate }: GetTodosProps): Promise<Response> => {
  if (isNaN(Number(page))) page = 1;
  if (page < 1) page = 1;

  if (isNaN(Number(take))) take = 5;
  if (take < 1) take = 5;


  let query = `page_size=${take}&page=${page}&`

  try {
    if (isDone !== undefined) {
      query += `done=${isDone}&`;
    }

    if (startDate !== undefined && endDate !== undefined) {
      query += `start_date=${startDate}&end_date=${endDate}&`;
    }
    console.log(query)

    const response = await fetch(`${API_URL}/todo/?${query}`, {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
      },
      cache: 'no-cache'
    });

    if (!response.ok) {
      throw new Error('Hubo un error al obtener las tareas.')
    }

    const { count, next, previous, results } = await response.json() as ResponseTodoList;

    const totalPages = Math.ceil(count / take);

    return {
      currentPage: page,
      totalPages,
      todos: results
    }
  } catch (error) {
    throw new Error('Hubo un error al obtener las tareas.')
  }
}
