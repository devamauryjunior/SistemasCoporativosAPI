import { Router, json } from "express";
import cors from "cors"
import UserController from "./controllers/UserController.js";
import ProdutoController from "./controllers/ProdutoController.js";
// import SessionController from "./controllers/SessionController.js";
import SessionController from "./controllers/SessionController.js";
import authMiddleware from "./middleware/auth.js"
import EsqueceuSenhaCotroller from "./controllers/EsqueceuSenhaCotroller.js";
import RecurperaSenhaController from "./controllers/RecurperaSenhaController.js";


const routes = new Router();

routes.use(json());
routes.use(cors());

routes.post('/user/create', UserController.addUser)
routes.post('/user/login', SessionController.createSession)
routes.post('/esqueceusenha', EsqueceuSenhaCotroller.esqueceuSenha)
routes.post('/reset', RecurperaSenhaController.recuperarSenha)

routes.use(authMiddleware)

routes.get("/produtos", ProdutoController.getProdutos);
routes.post("/produto/add", ProdutoController.addProduto);
routes.put("/produto/update", ProdutoController.updateProdutos);
routes.delete("/produto/delete", ProdutoController.deleProduto);

export default routes;
