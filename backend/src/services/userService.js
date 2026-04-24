import { User } from '../models/User.js';
import { AppError } from '../utils/AppError.js';

export async function getProfileById(userId) {
  const user = await User.findById(userId);
  if (!user) throw new AppError('User not found', 404);
  return {
    id: user._id,
    name: user.name,
    email: user.email,
    role: user.role,
    createdAt: user.createdAt,
  };
}
