import  Jwt  from "jsonwebtoken";
import bcrypt from 'bcryptjs'
import User from "../models/UserModel.js"
import authConfig from "../config/auth.js"

class SessionController{
    async createSession(req,res){
        const{email,password} = req.body

        const user = await User.findOne({where:{email}})

        if(!user){
          return  res.json(
            {
              msg:"usuario não cadastrado.",
              status: "erro"
            }
          )
        }
        const checkPassword = await bcrypt.compare(toString(password),user.password_hash)

        if(!checkPassword){
          return  res.json(
            {
              msg:"usuario ou senha incorretos.",
              status: "erro"
            }
          )
        }
        const {id, nome} = user

        return res.json({
            user:{
                id,
                nome
            },
            token: Jwt.sign({id}, authConfig.secret),
            status: "ok"
        })
    }
}

export default new SessionController