import { getEnvironments } from "../../helpers";
import type { Todo } from '../../todo';

const { API_URL } = getEnvironments()

interface Success { 
  ok: true;
  todo: Todo;
}

interface Error {
  ok: false;
  error: unknown;
}

export const getTodoById = async(id: string): Promise<Success | Error> => {
  try {
    const response = await fetch(`${API_URL}/todo/${id}/`, {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json'
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



