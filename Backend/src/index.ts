import express from 'express';
import dotenv from 'dotenv';
import sequelize from './config/db';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
