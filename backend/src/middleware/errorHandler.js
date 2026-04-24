import mongoose from 'mongoose';
import { AppError } from '../utils/AppError.js';

export function errorHandler(err, req, res, next) {
  let message = err.message || 'Server error';
  let statusCode = err.statusCode || 500;

  if (err.name === 'CastError') {
    message = 'Resource not found';
    statusCode = 400;
  } else if (err.code === 11000) {
    const key = Object.keys(err.keyValue || {})[0] || 'field';
    message = `Duplicate value for ${key}`;
    statusCode = 400;
  } else if (err instanceof mongoose.Error.ValidationError) {
    message = Object.values(err.errors)
      .map((e) => e.message)
      .join('. ');
    statusCode = 400;
  } else if (err.name === 'JsonWebTokenError') {
    message = 'Invalid token. Please log in again.';
    statusCode = 401;
  } else if (err.name === 'TokenExpiredError') {
    message = 'Token expired. Please log in again.';
    statusCode = 401;
  } else if (err instanceof AppError) {
    message = err.message;
    statusCode = err.statusCode;
  }

  res.status(statusCode).json({
    success: false,
    message,
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack }),
  });
}

export function notFound(req, res, next) {
  next(new AppError(`Not found: ${req.originalUrl}`, 404));
}
