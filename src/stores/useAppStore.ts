import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { createRecipeSlice, RecipeSliceType } from './recipeSlice';
import { createFavoriteSlice, type FavoriteSliceType } from './favoriteSlice';

export const useAppStore = create<RecipeSliceType & FavoriteSliceType>()(
	devtools((...a) => ({
		...createRecipeSlice(...a),
		...createFavoriteSlice(...a),
	}))
);
