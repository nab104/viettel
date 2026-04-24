import { Router } from 'express';
import * as product from '../controllers/productController.js';
import { protect, restrictTo } from '../middleware/auth.js';
import { validate } from '../middleware/validate.js';
import { createProductRules, updateProductRules } from '../validators/product.js';

const r = Router();

r.get('/', product.getProducts);
r.get('/:id', product.getProduct);
r.post('/', protect, restrictTo('admin'), createProductRules, validate, product.createProduct);
r.put('/:id', protect, restrictTo('admin'), updateProductRules, validate, product.updateProduct);
r.delete('/:id', protect, restrictTo('admin'), product.deleteProduct);

export { r as productRouter };
