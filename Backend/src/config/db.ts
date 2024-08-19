import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
  "postgresql://SendSmart_owner:4DtH5xUAcTlW@ep-soft-hat-a1vpjayz-pooler.ap-southeast-1.aws.neon.tech/SendSmart?sslmode=require",
  {
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false, // This bypasses SSL certificate validation, use with caution
      },
    },
  }
);

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

export default sequelize;
