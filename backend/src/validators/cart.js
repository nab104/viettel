import { body, param } from 'express-validator';

export const addCartRules = [
  body('productId').notEmpty().withMessage('productId is required'),
  body('quantity').isInt({ min: 1 }).withMessage('quantity must be a positive integer'),
];

export const productIdParamRules = [param('productId').notEmpty().withMessage('productId is required')];

export const updateCartQuantityRules = [
  ...productIdParamRules,
  body('quantity').isInt({ min: 1 }).withMessage('quantity must be a positive integer'),
];
