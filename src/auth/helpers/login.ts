import type { LoginUser } from "../interfaces/login.interfaces";
import { getEnvironments } from '../../helpers'
import { signIn } from "auth-astro/client";

const { API_URL } = getEnvironments()


export const login = async(credentials: LoginUser): Promise<{
  ok: true;
  user: any;
} | {
  ok: false;
}> => {

  try {
    const authResponse = await fetch(`${API_URL}/user/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    })
  
    if (!authResponse.ok) {
      throw new Error('Error al iniciar sesión')
    }
  
    const user = await authResponse.json()

    return {
      ok: true,
      user,
    }
  } catch (error) {
    return {
      ok: false,
    }
  }
}

export const loginAuth = async(credentials: LoginUser) => {

  const { email, password } = credentials

  try {
 
  await signIn('credentials', {
    email,
    password,
    redirect: false,
  })

  return {
    ok: true,
  }
  } catch (error) {
   return {
    ok: false,
   } 
  }
}