import express from 'express'
import ProductoController from '../controllers/productoController.js'

const { findAll, create, update, remove, findOne } = ProductoController

const router = express.Router()

router.get("/", findAll)
router.post("/", create)
router.put("/", update)
router.delete("/:idProducto", remove)
router.get("/:idProducto", findOne)

export default router;