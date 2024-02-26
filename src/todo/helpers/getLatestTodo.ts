import { getEnvironments } from "../../helpers";
import type { Todo } from '../';

const { API_URL } = getEnvironments()

interface Success { 
  ok: true;
  todo: Todo;
}

interface Error {
  ok: false;
  error: unknown;
}

export const getLatestTodo = async(token: string): Promise<Success | Error> => {
  try {    
    const response = await fetch(`${API_URL}/todo/latest-todo/`, {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
      }
    });

    if (!response.ok) {
      throw new Error('Error al obtener el todo, intente nuevamente.');
    }

    const todo = await response.json();
    
    return {
      ok: true,
      todo
    }
  } catch (error) {
    return {
      ok: false,
      error
    }; 
  }
}
