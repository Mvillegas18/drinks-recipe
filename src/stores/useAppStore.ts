import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { createFavoriteSlice, type FavoriteSliceType } from './favoriteSlice';
import {
	createNotificationSlice,
	type NotificationSliceType,
} from './notificationSlice';
import { createRecipeSlice, type RecipeSliceType } from './recipeSlice';

export const useAppStore = create<
	RecipeSliceType & FavoriteSliceType & NotificationSliceType
>()(
	devtools((...a) => ({
		...createRecipeSlice(...a),
		...createFavoriteSlice(...a),
		...createNotificationSlice(...a),
	}))
);
