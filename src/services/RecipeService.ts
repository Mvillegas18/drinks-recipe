import axios from 'axios';
import type { SearchFilter } from '../types';
import {
	CategoriesApiResponseSchema,
	DrinksAPIResponse,
} from '../utils/recipes-shema';

export async function getCategories() {
	const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
	const { data } = await axios(url);

	const result = CategoriesApiResponseSchema.safeParse(data);

	if (result.success) {
		return result.data;
	}
}

export async function getRecipes(filters: SearchFilter) {
	const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${filters.category}&i=${filters.ingredient}`;

	const { data } = await axios(url);

	const result = DrinksAPIResponse.safeParse(data);
	console.log(result.success);

	if (result.success) {
		return result.data;
	}
}
