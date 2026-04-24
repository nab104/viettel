import { catchAsync } from '../utils/catchAsync.js';
import * as authService from '../services/authService.js';

export const register = catchAsync(async (req, res) => {
  const result = await authService.register(req.body);
  res.status(201).json({ success: true, data: result });
});

export const login = catchAsync(async (req, res) => {
  const result = await authService.login(req.body);
  res.json({ success: true, data: result });
});
