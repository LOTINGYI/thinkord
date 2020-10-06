import * as fs from 'fs';
import * as path from 'path';
import { Sequelize, Model } from 'sequelize';
// // import { config } from '../config/config.ts';

const basename = path.basename(__filename);
const env = process.env.NOD

type db = {
    [key: string]: unknown
}

const db: db = {}


let sequelize: Sequelize

sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'main/db.sqlite3'
})

const dir = path.join(__dirname, '../main/models')

export class DBCreate {
    static async create() {
        /** 1 Process each file and extract the model to db object */
        await this.fileprocess()
        /** 2 Add the sequelize and Sequelize attributes */
        db.sequelize = sequelize
        db.Sequelize = Sequelize
        return db
    }

    static async fileprocess() {
        await fs
            .readdirSync(dir)
            .filter((file) => {
                return (file.indexOf('.') !== 0) && (file !== 'index.ts') && (file.slice(-3) === '.ts');
            })
            .forEach(async (file) => {
                const module = await import(`./${file}`)
                const key = Object.keys(module)[0]
                const value = Object.values(module)[0]
                db[key] = value;
            })
            
        
    }
}




