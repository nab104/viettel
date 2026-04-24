import { Router } from 'express';
import * as order from '../controllers/orderController.js';
import { protect } from '../middleware/auth.js';

const r = Router();

r.use(protect);
r.get('/', order.getMyOrders);
r.post('/', order.createOrder);

export { r as orderRouter };
