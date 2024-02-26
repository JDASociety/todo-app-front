import { signOut } from "auth-astro/client"

export const handleSignOut = async() => {
  await signOut()
}
