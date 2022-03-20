import { URLController } from './controller/URLController'
import express, { Request, Response } from 'express'

import { config } from './config/Constants'
import { MongoConnection } from './database/MongoConnnection'


const api = express()
api.use(express.json())

const database = new MongoConnection()

database.connect()

const urlController = new URLController()

api.post('/shorten', urlController.shorthenUrl)

api.get('/test', (req: Request, res: Response) => {
    res.send({
        message: "SUCCESS"
    })
})

api.get('/:hash',urlController.redirect)

try {
    api.listen(config.API_PORT, () => console.log(`Express listening in port ${config.API_PORT}`))
} catch(e) {
    console.log("Express not listening")
}