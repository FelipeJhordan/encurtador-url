import mongoose from "mongoose"
import { config } from "../config/Constants"

export class MongoConnection {
    public async connect(): Promise<void> {
        try {
            console.log("Database connect")
            await mongoose.connect(config.MONGO_CONNECTION)
        } catch(err) {
            console.log(err)
            process.exit(1)
        }
    }
 }