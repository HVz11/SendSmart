import { DataType, DataTypes, Model } from "sequelize";
import sequelize from "../config/db";
import bcrypt from "bcryptjs";

class User extends Model {
  public id!: number;
  public email!: string;
  public password!: string;
  public createdAt!: Date;
  public updatedAt!: Date;

  public validPassword(password: string): boolean {
    return bcrypt.compareSync(password, this.password);
  }
}

User.init(
  {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "User",
  }
);

export default User;
