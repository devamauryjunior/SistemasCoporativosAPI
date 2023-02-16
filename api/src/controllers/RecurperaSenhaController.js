import  jwt  from "jsonwebtoken";
import brypt from 'bcryptjs'
import authConfig from "../config/auth.js"
import User from "../models/UserModel.js";


class RecuperarSenhaContoller{

    async recuperarSenha(req,res){
        const authHeader = req.query.token
        const {newPassord} = req.body
        const {newPassordRepeat} = req.body

        if(!authHeader || !newPassord || !newPassordRepeat){
            return res.json('Os dados são obrigatórios')
        }
        try {
            const decoded = jwt.verify(authHeader, authConfig.secret)
            if(!decoded){
                return res.json('Tokem inválido.')
            }
            const password_hash = await brypt.hash(newPassord, 8)
            const {id} = decoded

            await User.update({password_hash},{
                where: {
                    id
                }
            })
            return res.json("Senha atualizada com sucesso.")

        } catch (error) {
            return res.json('Erro na aualização.')
        }
    }
}

export default new RecuperarSenhaContoller