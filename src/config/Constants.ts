import dotenv from 'dotenv'

dotenv.config()


export const  config =  {
         API_URL: process.env.API_URL,
         API_PORT: process.env.API_PORT,
         MONGO_CONNECTION: process.env.MONGO_CONNECTION as string
}
