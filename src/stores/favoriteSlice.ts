import { StateCreator } from 'zustand';
import { Recipe } from '../types';

export type FavoriteSliceType = {
	favorites: Recipe[];
	handleClickFavorite: (recipe: Recipe) => void;
	favoriteExist: (id: Recipe['idDrink']) => boolean;
	loadFromStorage: () => void;
};

export const createFavoriteSlice: StateCreator<FavoriteSliceType> = (
	set,
	get
) => ({
	favorites: [],
	handleClickFavorite: (recipe) => {
		if (get().favoriteExist(recipe.idDrink)) {
			set((state) => ({
				favorites: state.favorites.filter(
					(favorite) => favorite.idDrink !== recipe.idDrink
				),
			}));
		} else {
			set((state) => ({
				favorites: [...state.favorites, recipe],
			}));
		}
		localStorage.setItem('favorites', JSON.stringify(get().favorites));
	},
	favoriteExist: (id) => {
		const recipeFound = get().favorites.some(
			(favorite) => favorite.idDrink === id
		);

		return recipeFound;
	},
	loadFromStorage: () => {
		const storedFavorites = localStorage.getItem('favorites');

		if (storedFavorites) {
			set({
				favorites: JSON.parse(storedFavorites),
			});
		}
	},
});
