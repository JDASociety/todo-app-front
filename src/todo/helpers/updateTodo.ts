import { getEnvironments } from "../../helpers";
import type { CreateTodo, Todo } from "../../interfaces";

const { API_URL } = getEnvironments()

interface Success {
  ok: true;
  todo: Todo;
}

interface Error {
  ok: false;
}

export const updateTodo = async(id: string, values: CreateTodo): Promise<Success | Error> => {

  try {
    const response = await fetch(`${API_URL}/todo/${id}/`, {
      method: 'PUT',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(values)
    });

    if (!response.ok) {
      throw new Error('Error al actualizar el todo, intente nuevamente.');
    }

    const todo = await response.json();
    
    return {
      ok: true,
      todo
    }
  } catch (error) {
    return {
      ok: false,
    }
  }

}
