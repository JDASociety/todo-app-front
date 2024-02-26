import { DefaultSession } from "@auth/core/types"
import "@auth/core/types"

// Declare your framework library
declare module '@auth/core/types' {

  interface Session {
    user: {
      token: string;
    } & DefaultSession['user']
  } 
}
