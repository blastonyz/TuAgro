import nodemailer from 'nodemailer'
import configuration from '../config/configuration.js'

export default class EmailServices{
    static #instance = null;
    constructor(){
        this.transporter = nodemailer.createTransport({
            service: configuration.mail.emailServices,
            secure: true,
            port: configuration.mail.emailPort,
            auth: {
                user: configuration.mail.emailUser,
                pass: configuration.mail.emailPassword,
            },
            tls: {
                rejectUnauthorized: false 
            }
        })
    }

    sendMail(to,subject,html,attachments = []){
        return this.transporter.sendMail({
            from: configuration.mail.emailUser,
            to,
            subject,
            html,
            attachments
        })
    }

    static getInstance(){
        if(!EmailServices.#instance){
            EmailServices.#instance = new EmailServices()
        }
        return EmailServices.#instance;
    }
}