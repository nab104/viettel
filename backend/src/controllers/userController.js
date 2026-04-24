import { catchAsync } from '../utils/catchAsync.js';
import * as userService from '../services/userService.js';

export const getProfile = catchAsync(async (req, res) => {
  const profile = await userService.getProfileById(req.user._id);
  res.json({ success: true, data: { user: profile } });
});
