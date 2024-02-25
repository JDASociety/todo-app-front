import { getEnvironments } from "../../helpers";
import type { CreateTodo } from "../";

const { API_URL } = getEnvironments()

export const setNewTodo = async(todo: CreateTodo) =>  {

  try {
    const response = await fetch(`${API_URL}/todo/`, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(todo)
    });

    if (!response.ok) {
      throw new Error('Error al crear el todo, intente nuevamente.');
    }

    return {
      ok: true
    };
  } catch (error) {

    return {
      ok: false,
      error
    }; 
  }
}