import Credentials from '@auth/core/providers/credentials'
import { defineConfig,  } from 'auth-astro'
import { login } from './src/auth'

export default defineConfig({
	secret: import.meta.env.AUTH_SECRET,
	pages: {
		signIn: '/auth/login',
		newUser: '/auth/register',
		signOut: '/profile'
	},
	session: {
		strategy: 'jwt',
	},
	callbacks: {
		async jwt({ token, user, session }) {
			if (user) {
				token.data = user
			}

			return token
		},
		async session({ session, token }) {
			session.user = token.data as any

			return session
		},
	},
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

				console.log(authResponse.user)

        return {
					...authResponse.user.user,
					token: authResponse.user.token,
				}
			},
		}),
	],
})