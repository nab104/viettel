import { verifyToken } from '../utils/jwt.js';
import { AppError } from '../utils/AppError.js';
import { catchAsync } from '../utils/catchAsync.js';
import { User } from '../models/User.js';

export const protect = catchAsync(async (req, res, next) => {
  let token;
  const auth = req.headers.authorization;
  if (auth?.startsWith('Bearer ')) token = auth.split(' ')[1];
  if (!token) throw new AppError('Not authorized. Please log in.', 401);

  const decoded = verifyToken(token);
  const user = await User.findById(decoded.id);
  if (!user) throw new AppError('User not found', 401);
  req.user = user;
  next();
});

export const restrictTo = (...roles) =>
  (req, res, next) => {
    if (!req.user) return next(new AppError('Not authorized', 401));
    if (!roles.includes(req.user.role)) {
      return next(new AppError('You do not have permission to perform this action', 403));
    }
    next();
  };
