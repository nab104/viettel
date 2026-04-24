import mongoose from 'mongoose';
import { Cart } from '../models/Cart.js';
import { Product } from '../models/Product.js';
import { AppError } from '../utils/AppError.js';

const populated = { path: 'items.product', model: 'Product', populate: { path: 'category', select: 'name' } };

export async function getOrCreateCart(userId) {
  let cart = await Cart.findOne({ user: userId }).populate(populated);
  if (!cart) {
    cart = await Cart.create({ user: userId, items: [] });
    cart = await Cart.findById(cart._id).populate(populated);
  }
  return cart;
}

export async function addToCart(userId, productId, quantity) {
  if (!mongoose.Types.ObjectId.isValid(productId)) {
    throw new AppError('Invalid product id', 400);
  }
  const product = await Product.findById(productId);
  if (!product) throw new AppError('Product not found', 404);
  if (product.stock < quantity) {
    throw new AppError('Not enough stock', 400);
  }

  let cart = await Cart.findOne({ user: userId });
  if (!cart) cart = await Cart.create({ user: userId, items: [] });

  const existing = cart.items.find((i) => i.product.toString() === productId);
  if (existing) {
    const newQty = existing.quantity + quantity;
    if (newQty > product.stock) throw new AppError('Not enough stock', 400);
    existing.quantity = newQty;
  } else {
    cart.items.push({ product: productId, quantity });
  }
  await cart.save();
  return Cart.findById(cart._id).populate(populated);
}

export async function removeItem(userId, productId) {
  if (!mongoose.Types.ObjectId.isValid(productId)) {
    throw new AppError('Invalid product id', 400);
  }
  const cart = await Cart.findOne({ user: userId });
  if (!cart) throw new AppError('Cart not found', 404);
  cart.items = cart.items.filter((i) => i.product.toString() !== productId);
  await cart.save();
  return Cart.findById(cart._id).populate(populated);
}

export async function updateItemQuantity(userId, productId, quantity) {
  if (!mongoose.Types.ObjectId.isValid(productId)) {
    throw new AppError('Invalid product id', 400);
  }
  if (quantity < 1) throw new AppError('Quantity must be at least 1', 400);
  const product = await Product.findById(productId);
  if (!product) throw new AppError('Product not found', 404);
  if (quantity > product.stock) throw new AppError('Not enough stock', 400);

  let cart = await Cart.findOne({ user: userId });
  if (!cart) {
    throw new AppError('Cart is empty. Add the product first', 400);
  }
  const line = cart.items.find((i) => i.product.toString() === productId);
  if (!line) throw new AppError('Item not in cart', 404);
  line.quantity = quantity;
  await cart.save();
  return Cart.findById(cart._id).populate(populated);
}
