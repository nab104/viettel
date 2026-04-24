import { body } from 'express-validator';

export const createProductRules = [
  body('name').trim().notEmpty().withMessage('Name is required'),
  body('price').isFloat({ min: 0 }).withMessage('Price must be a non-negative number'),
  body('category').notEmpty().withMessage('Category is required'),
  body('images').optional().isArray().withMessage('images must be an array'),
  body('description').optional().isString(),
  body('stock').optional().isInt({ min: 0 }).withMessage('stock must be a non-negative integer'),
];

export const updateProductRules = [
  body('name').optional().trim().notEmpty().withMessage('Name cannot be empty'),
  body('price').optional().isFloat({ min: 0 }),
  body('images').optional().isArray(),
  body('description').optional().isString(),
  body('category').optional().notEmpty(),
  body('stock').optional().isInt({ min: 0 }),
];
