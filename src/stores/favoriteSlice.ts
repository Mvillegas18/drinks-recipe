import { StateCreator } from 'zustand';
import { Recipe } from '../types';
import {
	createNotificationSlice,
	NotificationSliceType,
} from './notificationSlice';
import { RecipeSliceType } from './recipeSlice';

export type FavoriteSliceType = {
	favorites: Recipe[];
	handleClickFavorite: (recipe: Recipe) => void;
	favoriteExist: (id: Recipe['idDrink']) => boolean;
	loadFromStorage: () => void;
};

export const createFavoriteSlice: StateCreator<
	FavoriteSliceType & RecipeSliceType & NotificationSliceType,
	[],
	[],
	FavoriteSliceType
> = (set, get, api) => ({
	favorites: [],
	handleClickFavorite: (recipe) => {
		if (get().favoriteExist(recipe.idDrink)) {
			set((state) => ({
				favorites: state.favorites.filter(
					(favorite) => favorite.idDrink !== recipe.idDrink
				),
			}));
			createNotificationSlice(set, get, api).showNotification({
				text: 'Se elimino correctamente',
				error: false,
			});
		} else {
			set((state) => ({
				favorites: [...state.favorites, recipe],
			}));

			createNotificationSlice(set, get, api).showNotification({
				text: 'Se agrego a favoritos correctamente',
				error: false,
			});
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
