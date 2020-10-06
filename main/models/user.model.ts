import { Sequelize, Model, DataTypes, BuildOptions } from "sequelize";

import { database } from "../config/config";

export class User extends Model {
    public id!: number;
 
}
