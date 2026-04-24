import express from 'express';
import cors from 'cors';
import { errorHandler, notFound } from './middleware/errorHandler.js';
import { authRouter } from './routes/authRoutes.js';
import { userRouter } from './routes/userRoutes.js';
import { productRouter } from './routes/productRoutes.js';
import { cartRouter } from './routes/cartRoutes.js';
import { orderRouter } from './routes/orderRoutes.js';
import { categoryRouter } from './routes/categoryRoutes.js';

const app = express();

app.use(cors());
app.use(express.json({ limit: '1mb' }));

app.get('/health', (req, res) => {
  res.json({ success: true, message: 'ok' });
});

app.use('/api/auth', authRouter);
app.use('/api/user', userRouter);
app.use('/api/products', productRouter);
app.use('/api/cart', cartRouter);
app.use('/api/orders', orderRouter);
app.use('/api/categories', categoryRouter);

app.use(notFound);
app.use(errorHandler);

export { app };
