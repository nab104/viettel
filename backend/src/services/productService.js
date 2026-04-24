import { Product } from '../models/Product.js';
import { Category } from '../models/Category.js';
import { AppError } from '../utils/AppError.js';

const populated = { path: 'category', select: 'name' };

export async function getProducts() {
  return Product.find().populate(populated).sort({ createdAt: -1 }).lean();
}

export async function getProductById(id) {
  const p = await Product.findById(id).populate(populated);
  if (!p) throw new AppError('Product not found', 404);
  return p;
}

export async function createProduct(data) {
  const cat = await Category.findById(data.category);
  if (!cat) throw new AppError('Category not found', 400);
  return Product.create(data);
}

export async function updateProduct(id, data) {
  if (data.category) {
    const cat = await Category.findById(data.category);
    if (!cat) throw new AppError('Category not found', 400);
  }
  const p = await Product.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true,
  }).populate(populated);
  if (!p) throw new AppError('Product not found', 404);
  return p;
}

export async function deleteProduct(id) {
  const p = await Product.findByIdAndDelete(id);
  if (!p) throw new AppError('Product not found', 404);
  return p;
}
