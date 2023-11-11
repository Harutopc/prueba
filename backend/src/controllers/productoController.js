import ProductosRepository from "../repository/productoRepository.js";

const findAll = async (req, res) => {
    const result = await ProductosRepository.findAll();

    return sendResponse(result, res);
}

const findOne = async (req, res) => {
    const id = req.params.idProducto;
    const result = await ProductosRepository.findOne(id);

    return sendResponse(result, res);
}

const create = async (req, res) => {

    const result = await ProductosRepository.create(req.body);

    return sendResponse(result, res);
}

const update = async (req,res) => {
    const result = await ProductosRepository.update(req.body)

    return sendResponse(result, res);
}

const remove = async (req, res) => {

    const id = req.params.idProducto;

    const result = await ProductosRepository.remove(id)

    return sendResponse(result, res);
}

const sendResponse = (result, res) => {
    if (result)
        return res.status(200).json(result);
    else
        return res.status(500).json({ message: 'Ha ocurrido un error'})
} 

const ProductoController = { findAll, create, findOne, update, remove }

export default ProductoController;