import { getEnvironments } from "../../helpers";
import type { CreateTodo, Todo } from "../";

const { API_URL } = getEnvironments()

interface Success {
  ok: true;
  todo: Todo;
}

interface Error {
  ok: false;
}

interface Props {
  id: string;
  values: CreateTodo;
  token: string;
}

export const updateTodo = async({ id, token, values }: Props): Promise<Success | Error> => {

  try {
    const response = await fetch(`${API_URL}/todo/${id}/`, {
      method: 'PUT',
      headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
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
