import jwt  from "jsonwebtoken";
import User from "../models/UserModel.js";
import authConfig from "../config/auth.js";

class UserController{

    async addUser(req, res) {
        const {email} = req.body

        const userExists = await User.findOne({where: {email}})
        if(userExists){
            return res.json(
                {
                    msg:'usuario já cadastrado.',
                    status: 'erro'
                }
            )
        }
        const {id,nome} = await User.create(req.body)
        return res.json(
            {
                user:{
                    id,
                    nome
                },
                token: jwt.sign({id}, authConfig.secret),
                status: "ok"
            }
        )
    }
}

export default new UserController
