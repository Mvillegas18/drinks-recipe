import { StateCreator } from 'zustand';
import {
	getCategories,
	getRecipeById,
	getRecipes,
} from '../services/RecipeService';
import type { Categories, Drink, Drinks, Recipe, SearchFilter } from '../types';

export type RecipeSliceType = {
	categories: Categories;
	drinks: Drinks;
	modal: boolean;
	selectedRecipe: Recipe;
	fetchCategories: () => Promise<void>;
	searchRecipes: (searchFilters: SearchFilter) => Promise<void>;
	selectRecipe: (id: Drink['idDrink']) => Promise<void>;
	closeModal: () => void;
};

export const createRecipeSlice: StateCreator<RecipeSliceType> = (set) => ({
	categories: {
		drinks: [],
	},
	modal: false,
	drinks: {
		drinks: [],
	},
	selectedRecipe: {} as Recipe,
	fetchCategories: async () => {
		const categories = await getCategories();

		set({
			categories,
		});
	},

	searchRecipes: async (searchFilters) => {
		const drinks = await getRecipes(searchFilters);

		set({
			drinks,
		});
	},

	selectRecipe: async (id) => {
		const selectedRecipe = await getRecipeById(id);

		set({
			selectedRecipe,
			modal: true,
		});
	},

	closeModal: () =>
		set({
			modal: false,
		}),
});
