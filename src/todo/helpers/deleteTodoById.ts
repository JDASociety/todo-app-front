import { getEnvironments } from "../../helpers";

const { API_URL } = getEnvironments()

export const deleteTodoById = async(id: string) => {
  try {
    const response = await fetch(`${API_URL}/todo/${id}/`, {
      method: 'DELETE',
      headers: {
          'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error('Error al eliminar el todo, intente nuevamente.');
    }
    
    return {
      ok: true,
    }
  } catch (error) {
    return {
      ok: false,
    } 
  } 
}
