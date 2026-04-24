import { Router } from 'express';
import * as category from '../controllers/categoryController.js';

const r = Router();

r.get('/', category.getCategories);

export { r as categoryRouter };
