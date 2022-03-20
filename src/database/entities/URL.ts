import { getModelForClass, prop } from '@typegoose/typegoose'

export class URL {
    @prop({required: true})
    hash: string
    

    @prop({required: true})
    originUrl?: string

    @prop({required: true})
    shortUrl?: string
}

export const URLModel =  getModelForClass(URL)