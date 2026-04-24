import 'dotenv/config';
import { app } from './app.js';
import { connectDB } from './config/db.js';

const port = process.env.PORT || 5000;

if (!process.env.JWT_SECRET) {
  console.warn('Warning: JWT_SECRET is not set');
}

connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server on http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.error('MongoDB connection failed', err);
    process.exit(1);
  });
