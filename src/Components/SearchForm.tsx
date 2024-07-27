import { useAppStore } from '../stores/useAppStore';

export default function SearchForm() {
	const { drinks } = useAppStore((state) => state.categories);

	return (
		<form
			action=''
			className='md:w-1/2 2xl:w-1/3 bg-orange-400 my-32 p-10 rounded-lg shadow space-y-6'>
			<div className='space-y-4'>
				<label
					htmlFor='ingredient'
					className='block text-white uppercase font-extrabold text-lg'>
					Nombre o ingredientes
				</label>
				<input
					id='ingredient'
					type='text'
					placeholder='Ej. Vodka, Ron, etc.'
					name='ingredient'
					className='p-3 w-full rounded-lg focus:outline-none'
				/>
			</div>

			<div className='space-y-4'>
				<label
					htmlFor='Category'
					className='block text-white uppercase font-extrabold text-lg'>
					Categoria
				</label>
				<select
					name='category'
					id='category'
					className='p-3 w-full rounded-lg focus:outline-none'>
					<option value=''>-- Selecciona una categoría --</option>
					{drinks.map((category) => (
						<option
							key={category.strCategory}
							value={category.strCategory}>
							{category.strCategory}
						</option>
					))}
				</select>
			</div>

			<input
				type='submit'
				value='Buscar receta'
				className='bg-white text-orange-400 uppercase font-extrabold p-3 rounded-lg w-full cursor-pointer hover:bg-orange-600 hover:text-white transition-all duration-300'
			/>
		</form>
	);
}
