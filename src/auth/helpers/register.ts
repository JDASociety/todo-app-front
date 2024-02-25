import { getEnvironments } from "../../helpers"
import type { RegisterUser } from "../interfaces/register.interfaces"

const { API_URL } = getEnvironments()


export const register = async(credentials: RegisterUser) => {
  try {
    const authResponse = await fetch(`${API_URL}/user/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    })

    if (!authResponse.ok) {
      throw new Error('Error al registrar usuario')
    }

    return {
      ok: true
    }
  } catch (error) {
    return {
      ok: false,
      error
    }
  }
}

