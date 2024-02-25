import { useState } from 'preact/hooks'
import { useHelpersForm } from '../../../../hooks'
import { loginAuth } from '../../../../auth'

interface Props {
	alertIcon?: Element
	spinnerIcon?: Element
}

export const LoginForm = ({ alertIcon, spinnerIcon }: Props) => {
	const [values, setValues] = useState({
		email: '',
		password: '',
	})
	const { errorMessage, isLoading, onChangeIsLoading, onChangeMessageError } =
		useHelpersForm({})

	const handleOnChange = (e: InputEvent) => {
		const { name, value } = e.target as HTMLInputElement

		setValues({ ...values, [name]: value })
	}

	const onSubmit = async (e: SubmitEvent) => {
		e.preventDefault()

		onChangeIsLoading(true)

		const { ok } = await loginAuth(values)

		onChangeIsLoading(false)

		if (!ok) {
			onChangeMessageError(
				'Error al iniciar sesión, verifica tus credenciales.'
			)

			return
		}
	}

	return (
		<form class="mt-4 flex flex-col gap-2" onSubmit={onSubmit}>
			<div class="mb-3">
				<label class="mb-2 block text-xs font-semibold text-primary">
					Correo
				</label>
				<input
					type="email"
					name="email"
					placeholder="q@gmail.com"
					value={values.email}
					onInput={handleOnChange}
					class="input-primary"
				/>
			</div>

			<div class="mb-3">
				<label class="mb-2 block text-xs font-semibold text-primary">
					Contraseña
				</label>
				<input
					type="password"
					name="password"
					placeholder="*****"
					value={values.password}
					onInput={handleOnChange}
					class="input-primary"
				/>
			</div>

			{errorMessage && (
				<p class="text-sm bg-danger text-white font-semibold flex gap-2 p-2 rounded-md items-center">
					{alertIcon}
					{errorMessage}
				</p>
			)}

			<div class="mb-3">
				<button class="btn btn-orange w-full" disabled={isLoading}>
					{isLoading ? spinnerIcon : 'Iniciar sesión'}
				</button>
			</div>
		</form>
	)
}
