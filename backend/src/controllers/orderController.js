import { catchAsync } from '../utils/catchAsync.js';
import * as orderService from '../services/orderService.js';

export const createOrder = catchAsync(async (req, res) => {
  const order = await orderService.createOrderFromCart(req.user._id);
  res.status(201).json({ success: true, data: { order } });
});

export const getMyOrders = catchAsync(async (req, res) => {
  const orders = await orderService.getOrdersByUser(req.user._id);
  res.json({ success: true, data: { orders } });
});
