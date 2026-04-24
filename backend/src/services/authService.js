import { User } from '../models/User.js';
import { AppError } from '../utils/AppError.js';
import { signToken } from '../utils/jwt.js';

export async function register({ name, email, password }) {
  const existing = await User.findOne({ email });
  if (existing) throw new AppError('Email already registered', 400);
  const user = await User.create({ name, email, password, role: 'user' });
  const token = signToken(user._id);
  return { user: toPublicUser(user), token };
}

export async function login({ email, password }) {
  const user = await User.findOne({ email }).select('+password');
  if (!user) throw new AppError('Invalid email or password', 401);
  const ok = await user.comparePassword(password);
  if (!ok) throw new AppError('Invalid email or password', 401);
  const token = signToken(user._id);
  return { user: toPublicUser(user), token };
}

function toPublicUser(user) {
  return {
    id: user._id,
    name: user.name,
    email: user.email,
    role: user.role,
  };
}
