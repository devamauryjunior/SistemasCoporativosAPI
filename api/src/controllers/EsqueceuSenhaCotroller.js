import User from "../models/UserModel.js";
import  Jwt  from "jsonwebtoken";
import authConfig from "../config/auth.js"
import nodemailer from "nodemailer"

class EsqueceuSenhaController{

    async esqueceuSenha(req, res) {
        const {email} = req.body

        if(!email){
            return res.json('usuario não cadastrado.')
        }

        const userExists = await User.findOne({where: {email}})

        if(!userExists){
            return res.json('usuario não cadastrado.')
        }
        const {id} = userExists

        const token = Jwt.sign({id}, authConfig.secret, {expiresIn: authConfig.expiresIn})

        //http://localhost:3001/reset/:?token=999999999
        const url = `${req.protocol}://${req.hostmane}:3001/reset/?token=${token}`
       
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            host: "smtp.gmail.com",
            auth:{
                user: 'dmagpj04@gmail.com',
                pass:'ouqqormmoqdqhoax',
            }
        });

        var mailOptions ={
            from: '<junior>', 
            to: email, 
            subject: "Recuperação de senha",  
            html: `<a href="${url}" >Recuperar senha</a>`, 
        };

        transporter.sendMail(mailOptions, function(error, info){
            if(error){
                console.log(error);
            }else{
                console.log('email sent:'+ info.response);
            }
        });
        return res.json(mailOptions)
    }
}

export default new EsqueceuSenhaController
