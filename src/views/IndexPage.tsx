import { useMemo } from 'react';
import DrinkCard from '../Components/DrinkCard';
import { useAppStore } from '../stores/useAppStore';

export default function IndexPage() {
	const { drinks: { drinks } = { drinks: [] } } = useAppStore();
	const hasDrinks = useMemo(() => drinks.length > 0, [drinks]);

	return (
		<>
			<h1 className='text-6xl font-extrabold'>Recetas</h1>
			{hasDrinks ? (
				<div className='grid grid-cols-1 md:grid-cols-3 2xl:grid-cols-3 my-10 gap-10'>
					{drinks.map((drink) => (
						<DrinkCard
							key={drink.idDrink}
							drink={drink}
						/>
					))}
				</div>
			) : (
				<p className='my-10 text-center text-2xl'>
					No hay resultados aun, utiliza el formulario para buscar recetas
				</p>
			)}
		</>
	);
}
