import { catchAsync } from '../utils/catchAsync.js';
import { Category } from '../models/Category.js';

export const getCategories = catchAsync(async (req, res) => {
  const categories = await Category.find().sort({ name: 1 }).lean();
  res.json({ success: true, data: { categories } });
});
