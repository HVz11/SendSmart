import express from "express";
import dotenv from "dotenv";
import sequelize from "./config/db";
import authRoutes from "./routes/auth";
import emailRoutes from "./routes/email";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/email", emailRoutes);

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
