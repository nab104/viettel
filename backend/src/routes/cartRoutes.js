import { Router } from 'express';
import * as cart from '../controllers/cartController.js';
import { protect } from '../middleware/auth.js';
import { validate } from '../middleware/validate.js';
import {
  addCartRules,
  productIdParamRules,
  updateCartQuantityRules,
} from '../validators/cart.js';

const r = Router();

r.use(protect);
r.get('/', cart.getCart);
r.post('/items', addCartRules, validate, cart.addItem);
r.delete('/items/:productId', productIdParamRules, validate, cart.removeItem);
r.patch(
  '/items/:productId',
  updateCartQuantityRules,
  validate,
  cart.updateQuantity
);

export { r as cartRouter };
