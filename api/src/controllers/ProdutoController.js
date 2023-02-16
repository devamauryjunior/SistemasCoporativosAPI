import database from "../database/index.js";
import Produto from "../models/ProdutoModel.js";
import User from "../models/UserModel.js";

class ProdutoCrotoller {
  constructor() {
    database.sync();
  }
  async addProduto(req, res) {
    const { nome, preco } = req.body;

    await Produto.create({
      nome: nome,
      preco: preco,
    });

    return res.json({
      mensagem: "produto criado comsucesso",
      data: {
        nome,
        preco,
      },
    });
  }

  async getProdutos(req, res) {
    const prod = [
      {
        nome: "Teclado",
        qtd: "100",
      },
      {
        nome: "Teclado",
        qtd: "120",
      },
    ];
    return res.json(prod);
  }

  async updateProdutos(req, res) {
    const { id, preco } = req.boby;

    const prodUP = await Produto.update(
      {
        preco: preco,
      },
      {
        where: {
          id: id,
        },
      }
    );

    return res.json(prodUP);
  }

  async getProduto(req, res) {
    const { id } = req.params;
    const prod = [
      {
        id: id,
        nome: "Teclado",
        qtd: "100",
      },
    ];
    return res.json(prod);
  }
  async deleProduto(req, res) {
    const { id } = req.params;
    await Produto.destroy({
      where:{
        id:id
      }
    })
  }
}

export default new ProdutoCrotoller();
