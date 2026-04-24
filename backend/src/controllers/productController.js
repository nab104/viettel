import { catchAsync } from '../utils/catchAsync.js';
import * as productService from '../services/productService.js';

export const getProducts = catchAsync(async (req, res) => {
  const products = await productService.getProducts();
  res.json({ success: true, data: { products } });
});

export const getProduct = catchAsync(async (req, res) => {
  const product = await productService.getProductById(req.params.id);
  res.json({ success: true, data: { product } });
});

export const createProduct = catchAsync(async (req, res) => {
  const product = await productService.createProduct(req.body);
  res.status(201).json({ success: true, data: { product } });
});

export const updateProduct = catchAsync(async (req, res) => {
  const product = await productService.updateProduct(req.params.id, req.body);
  res.json({ success: true, data: { product } });
});

export const deleteProduct = catchAsync(async (req, res) => {
  await productService.deleteProduct(req.params.id);
  res.json({ success: true, data: null });
});
