import { z } from 'zod';
import { CategoriesApiResponseSchema } from '../utils/recipes-shema';

export type Categories = z.infer<typeof CategoriesApiResponseSchema>;
