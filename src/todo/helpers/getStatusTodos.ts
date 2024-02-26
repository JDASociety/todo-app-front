import { getEnvironments } from "../../helpers";
import type { StatusTodos } from "../";

const { API_URL } = getEnvironments()

export const getStatusTodos = async(token: string): Promise<StatusTodos> => {

  try {
    const response = await fetch(`${API_URL}/todo/status-todo/`, {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
      }
    });

    if (!response.ok) {
      throw new Error('Error al obtener los datos, intente nuevamente.');
    }

    const statusTodos = await response.json();
    
    return statusTodos
  } catch (error) {
    throw new Error('Error al obtener los datos, intente nuevamente.');
  }
}
