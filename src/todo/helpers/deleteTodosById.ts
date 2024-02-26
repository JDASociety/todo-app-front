import { getEnvironments } from "../../helpers";

const { API_URL } = getEnvironments()

export const deleteTodosById= async(token: string, ids: string[]) => {

  try {
    const response = await fetch(`${API_URL}/todo/delete-multiple/`, {
      method: 'DELETE',
      headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({ ids })
    });

    if (!response.ok) {
      throw new Error('Hubo un error al obtener las tareas.')
    }

    return {
      ok: true,
    }
  } catch (error) {
    return {
      ok: true,
    }
  }
}
