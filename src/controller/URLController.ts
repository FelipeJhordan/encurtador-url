import { config } from "../config/Constants";
import { Request, Response } from "express";
import shortId from 'shortid';
import { URLModel } from "../database/entities/URL";

export class URLController {
    public async shorthenUrl(req: Request, res: Response): Promise<void> {
        const { originUrl } = req.body
        const url = await URLModel.findOne({originUrl})

        if(!!url) {
            res.json(url)
            return
        }
        const hash = shortId.generate()
        const shortUrl = `${config.API_URL}/${hash}`

        const newUrl = await URLModel.create({shortUrl, hash, originUrl})

        res.json(newUrl)   
    }

    public async redirect(req: Request, res: Response): Promise<void> {
        try{
            const { hash } = req.params

            const url = await URLModel.findOne({hash})
            if(!url) {
                res.status(404).json({
                    message: "Não encontrado"
                })

                return
            }

            res.redirect(url.originUrl)
        } catch(e) {
            console.log(e)
        }
    }
}