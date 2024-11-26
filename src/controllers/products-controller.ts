import { Request, Response } from "express"
import { AppError } from "../utils/app-error"

class ProductsController {
  /**
   * index  - GET para listar vários registros.
   * show   - GET para exibir um registro especifico.
   * create - POST para cria um registro.
   * update - PUT para atualizar um registro.
   * remove - DELETE para deletar um registro
   */

  index(req: Request, res: Response) {
    const { page, limit } = req.query

    res.send(`Pagina ${page} de ${limit}`)
  }

  create(req: Request, res: Response) {
    const { name, price } = req.body

    if (!name) {
      throw new AppError("Informar nome do produto!")
    } else if (!price) {
      throw new AppError("Valor do item obrigatório")
    }
    res.status(201).json({ name, price, user_id: req.user_id })
  }
}

export { ProductsController }