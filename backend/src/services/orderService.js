import { Order } from '../models/Order.js';
import { Cart } from '../models/Cart.js';
import { Product } from '../models/Product.js';
import { AppError } from '../utils/AppError.js';

export async function createOrderFromCart(userId) {
  const cart = await Cart.findOne({ user: userId }).populate('items.product');
  if (!cart || !cart.items.length) {
    throw new AppError('Cart is empty', 400);
  }

  const orderItems = [];
  let totalPrice = 0;

  for (const line of cart.items) {
    const p = line.product;
    if (!p) {
      throw new AppError('A product in your cart is no longer available', 400);
    }
    if (p.stock < line.quantity) {
      throw new AppError(`Insufficient stock for ${p.name}`, 400);
    }
    totalPrice += p.price * line.quantity;
    orderItems.push({
      product: p._id,
      name: p.name,
      price: p.price,
      image: p.images?.[0] || '',
      quantity: line.quantity,
    });
  }

  for (const line of cart.items) {
    const p = line.product;
    await Product.findByIdAndUpdate(p._id, { $inc: { stock: -line.quantity } });
  }

  cart.items = [];
  await cart.save();

  const order = await Order.create({
    user: userId,
    items: orderItems,
    totalPrice,
    status: 'pending',
  });

  return Order.findById(order._id)
    .populate('user', 'name email')
    .populate('items.product', 'name images');
}

export async function getOrdersByUser(userId) {
  return Order.find({ user: userId })
    .sort({ createdAt: -1 })
    .populate('items.product', 'name images price');
}
