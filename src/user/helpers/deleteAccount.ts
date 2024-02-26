import { handleSignOut } from "../../auth"
import { getEnvironments } from "../../helpers"

const { API_URL } = getEnvironments()

export const deleteAccount = async(token: string) => {
  if (!token) throw new Error("No se ha iniciado sesión.")

  try {

    await fetch(`${API_URL}/user/delete_account`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })

    await handleSignOut()
  } catch (error) {
    throw new Error("Hubo un error al eliminar la cuenta.")
  }
}
