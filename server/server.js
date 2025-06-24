import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import posts from './routes/posts.js'
import logger from './middlewares/logger.js'
import errorHandler from './middlewares/error.js';

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/api/posts', posts);

app.use(logger);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
const URI = process.env.MONGO_URI;

mongoose.connect(URI)
  .then(() => {
    app.listen(PORT, () => console.log(` Server running on port ${PORT}`));
  })
  .catch(err => console.error('MongoDB connection error:', err));
