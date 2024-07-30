import { useMemo } from 'react';
import DrinkCard from '../Components/DrinkCard';
import { useAppStore } from '../stores/useAppStore';

export default function FavoritePage() {
	const { favorites } = useAppStore();

	const hasFavorite = useMemo(() => favorites.length, [favorites]);
	return (
		<>
			<h1 className='text-6xl font-extrabold'>FavoritePage</h1>
			{hasFavorite ? (
				<div className='grid grid-cols-1 md:grid-cols-3 2xl:grid-cols-3 my-10 gap-10'>
					{favorites.map((drink) => (
						<DrinkCard
							key={drink.idDrink}
							drink={drink}
						/>
					))}
				</div>
			) : (
				<p className='my-10 text-center text-2xl'>
					No hay favoritos aun, agrega bebidas a favoritos
				</p>
			)}
		</>
	);
}
