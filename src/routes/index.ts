import { productsRoutes } from "./products-routes";
import { Router } from "express";

const routes = Router()

routes.use("/products", productsRoutes)

export { routes }