import Credentials from '@auth/core/providers/credentials'
import { defineConfig } from 'auth-astro'
import { login } from './src/auth'

export default defineConfig({
	providers: [
		Credentials({
			async authorize(credentials: any, request) {

				if (!credentials?.email || !credentials?.password) {
					return null
				}

				const authResponse = await login({ email: credentials.email, password: credentials.password })

				if (!authResponse.ok) {
					return null
				}

        return authResponse.user
			},
		}),
	],
})