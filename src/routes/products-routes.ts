import { ProductsController } from "../controllers/products-controller";
import { myMiddleware } from "../middlewares/my-middleware";
import { Router } from "express";

const productsRoutes = Router()
const productsController = new ProductsController()

// Middleware global é aplicado para todas rotas abaixo
//app.use(myMiddleware)

// index
productsRoutes.get("/", productsController.index)

// Create
productsRoutes.post("/", myMiddleware, productsController.create) 

export { productsRoutes }