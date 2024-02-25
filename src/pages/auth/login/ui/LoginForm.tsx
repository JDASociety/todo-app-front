import { useState } from 'preact/hooks'

export const LoginForm = () => {
	const [isLoading, setIsLoading] = useState(false)

	return (
		<form class="mt-4 flex flex-col gap-2">
			<div class="mb-3">
				<label class="mb-2 block text-xs font-semibold text-primary">
					Correo
				</label>
				<input type="email" placeholder="q@gmail.com" class="input-primary" />
			</div>

			<div class="mb-3">
				<label class="mb-2 block text-xs font-semibold text-primary">
					Contraseña
				</label>
				<input type="password" placeholder="*****" class="input-primary" />
			</div>

			<div class="mb-3">
				<button class="btn btn-orange w-full">Iniciar Sesión</button>
			</div>
		</form>
	)
}
