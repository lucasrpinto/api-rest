import { Request, Response } from "express"
import { AppError } from "../utils/app-error"
import { z } from "zod"

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
    const bodySchema = z.object({
      name: z
        .string({ required_error: "Name is required!"})
        .trim()
        .min(6, { message: "Name must be 6 or more characters"}),
      price: z
        .number({ required_error: "Price is required!"})
        .positive({ message: "Price must be positive!" })
    })

    const {name, price} = bodySchema.parse(req.body)
    
    // if (!name) {
    //   throw new AppError("Informar nome do produto!")
    // } else if (!price) {
    //   throw new AppError("Valor do item obrigatório")
    // }
    res.status(201).json({ name, price, user_id: req.user_id })
  }
}

export { ProductsController }