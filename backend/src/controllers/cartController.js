import { catchAsync } from '../utils/catchAsync.js';
import * as cartService from '../services/cartService.js';

export const getCart = catchAsync(async (req, res) => {
  const cart = await cartService.getOrCreateCart(req.user._id);
  res.json({ success: true, data: { cart } });
});

export const addItem = catchAsync(async (req, res) => {
  const { productId, quantity } = req.body;
  const cart = await cartService.addToCart(req.user._id, productId, quantity);
  res.json({ success: true, data: { cart } });
});

export const removeItem = catchAsync(async (req, res) => {
  const cart = await cartService.removeItem(req.user._id, req.params.productId);
  res.json({ success: true, data: { cart } });
});

export const updateQuantity = catchAsync(async (req, res) => {
  const { quantity } = req.body;
  const cart = await cartService.updateItemQuantity(
    req.user._id,
    req.params.productId,
    quantity
  );
  res.json({ success: true, data: { cart } });
});
