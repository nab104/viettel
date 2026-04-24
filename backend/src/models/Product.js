import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    price: { type: Number, required: true, min: 0 },
    images: { type: [String], default: [] },
    description: { type: String, default: '' },
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true },
    stock: { type: Number, required: true, min: 0, default: 0 },
  },
  { timestamps: true }
);

export const Product = mongoose.model('Product', productSchema);
