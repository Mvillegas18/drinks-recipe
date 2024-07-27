import type { Drink } from '../types';

type DrinkCardProps = {
	drink: Drink;
};

export default function DrinkCard({ drink }: DrinkCardProps) {
	return (
		<div className='border shadow-lg'>
			<div className='overflow-hidden'>
				<img
					src={drink.strDrinkThumb}
					alt={`Imagen de ${drink.strDrink}`}
					className='hover:scale-125 transition-transform duration-300 w-full hover:rotate-2'
				/>
			</div>
			<div className='p-5'>
				<h2 className='text-2xl truncate font-black'>{drink.strDrink}</h2>
				<button
					type='submit'
					className='bg-orange-400 hover:bg-orange-500 hover:text-black mt-5 w-full p-3 font-bold text-white text-lg transition-all duration-300 '>
					Ver receta
				</button>
			</div>
		</div>
	);
}
