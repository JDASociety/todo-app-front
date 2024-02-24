export const RegisterForm = () => {
	return (
		<form class="mt-4 flex flex-col gap-2">
			<div class="mb-3">
				<label class="mb-2 block text-xs font-semibold text-primary">
					Email
				</label>
				<input
					type="email"
					placeholder="Enter your email"
					class="input-primary"
				/>
			</div>

			<div class="mb-3">
				<label class="mb-2 block text-xs font-semibold text-primary">
					Password
				</label>
				<input type="password" placeholder="*****" class="input-primary" />
			</div>

			<div class="mb-3">
				<button class="btn btn-orange w-full">Iniciar Sesión</button>
			</div>
		</form>
	)
}
