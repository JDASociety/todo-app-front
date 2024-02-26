import { useState } from 'preact/hooks'
import { useHelpersForm } from '../../../../hooks'
import {
	deleteTodoById,
	updateTodo,
	type CreateTodo,
	type Todo,
} from '../../../../todo'

interface Props {
	checkIcon?: Element
	spinnerIcon?: Element
	alertIcon?: Element
	todo: Todo
	token: string
}

export const UpdateTodoForm = ({
	checkIcon,
	alertIcon,
	spinnerIcon,
	todo,
	token,
}: Props) => {
	const [values, setValues] = useState<CreateTodo>({
		title: todo.title,
		description: todo.description,
		done: todo.done,
	})
	const { errorMessage, isLoading, onChangeMessageError, onChangeIsLoading } =
		useHelpersForm({})

	const onChange = (e: InputEvent) => {
		const target = e.target as HTMLInputElement
		const name = target.name
		const value = target.type === 'checkbox' ? target.checked : target.value

		setValues((prev) => ({ ...prev, [name]: value }))
	}

	const onDeleteTodo = async () => {
		onChangeIsLoading(true)

		const newTodo = await deleteTodoById(todo.id, token)

		onChangeIsLoading(false)

		if (!newTodo.ok) {
			onChangeMessageError(
				'Error al eliminar la tarea, contacte al administrador.'
			)

			return
		}

		window.location.href = '/todo/list'
	}

	const onSubmit = async (e: SubmitEvent) => {
		e.preventDefault()
		onChangeIsLoading(true)

		const newTodo = await updateTodo({ id: todo.id, token, values })

		onChangeIsLoading(false)

		if (!newTodo.ok) {
			onChangeMessageError(
				'Error al actualizar la tarea, contacte al administrador.'
			)

			return
		}

		window.location.href = '/todo/list'
	}

	return (
		<form
			id="form-new-todo"
			class="flex flex-col gap-5 w-full"
			onSubmit={onSubmit}>
			<input
				id="title"
				name="title"
				type="text"
				maxlength={70}
				required
				value={values.title}
				onInput={onChange}
				placeholder="Titulo de la tarea*"
				class="input-primary"
			/>
			<textarea
				id="description"
				name="description"
				rows={5}
				required
				value={values.description}
				maxlength={250}
				onInput={onChange}
				placeholder="Descripción de la tarea*"
				class="input-primary"></textarea>
			<div class="inline-flex items-center">
				<label
					class="relative flex cursor-pointer items-center rounded-full p-3 gap-5"
					for="checkbox-5"
					data-ripple-dark="true">
					<input
						id="done"
						name="done"
						checked={values.done}
						onInput={onChange}
						type="checkbox"
						class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-primary-light transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-primary-dark checked:bg-tertiary checked:before:bg-tertiary hover:before:opacity-10"
					/>
					<div class="pointer-events-none absolute top-2/4 left-[16px] -translate-y-2/4 text-tertiary opacity-0 transition-opacity peer-checked:opacity-100">
						{checkIcon}
					</div>
					<p>¿Marcar como completada?</p>
				</label>
			</div>
			{errorMessage && (
				<p class="text-sm bg-danger text-white font-semibold flex gap-2 p-2 rounded-md items-center">
					{alertIcon}
					{errorMessage}
				</p>
			)}
			<div class="flex flex-col gap-4">
				<button
					id="button-new-todo"
					class="btn btn-danger text-lg font-semibold"
					onClick={onDeleteTodo}
					disabled={isLoading}>
					{isLoading ? spinnerIcon : 'Eliminar tarea'}
				</button>
				<a href="/" class="btn btn-gray text-lg font-semibold">
					Cancelar
				</a>
				<button
					id="button-new-todo"
					class="btn btn-orange text-lg font-semibold"
					type="submit"
					disabled={isLoading}>
					{isLoading ? spinnerIcon : 'Actualizar tarea'}
				</button>
			</div>
		</form>
	)
}
