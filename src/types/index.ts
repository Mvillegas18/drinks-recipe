import { z } from 'zod';
import {
	CategoriesApiResponseSchema,
	SearchFilterSchema,
} from '../utils/recipes-shema';

export type Categories = z.infer<typeof CategoriesApiResponseSchema>;

export type SearchFilter = z.infer<typeof SearchFilterSchema>;
