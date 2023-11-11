import Producto from "../models/producto.js";


const findAll = async () => {
    try {

        const result = await Producto.findAll();
        console.debug(result)

        return result;

    } catch(err) {
        console.error(err)

        return null;
    }
}

const create = async (producto) => {
    try {

        const newproducto = await Producto.create(producto);

        return newproducto;

    } catch(err) {
        console.error(err)

        return null;
    }
}

const findOne = async (idProducto) => {
    try {
        return await Producto.findOne({
            where: {
                idProducto
            }
        })
    }
    catch(err) {
        console.error(err)
        return null;
    }
}

const update = async (producto) => {
    try {
        const foundproducto =  await Producto.findOne({
            where: {
                idProducto: producto.idProducto
            }
        })

        foundproducto.set(producto)

        foundproducto.save()

        return foundproducto;

    }
    catch(err) {
        console.error(err)
        return null;
    }
}

const remove = async (idProducto) => {
    try {
        await Producto.destroy({
            where: {
                idProducto
            }
        })

        return true;
    }
    catch(err) {
        console.error(err)
        return null;
    }        

}


const ProductosRepository = { findAll, create, findOne,update, remove };

export default ProductosRepository; 
