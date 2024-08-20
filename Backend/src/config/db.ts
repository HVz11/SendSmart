import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const connString = process.env.DATABASE_URL;
if (!connString) {
  throw new Error("DATABASE_URL is not defined in the environment variables.");
}

const sequelize = new Sequelize(connString, {
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

export default sequelize;
