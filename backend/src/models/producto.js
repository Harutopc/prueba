import { DataTypes } from "sequelize"
import sequelize from '../config/database.js'

const Producto = sequelize.define('productos', {
    idProducto: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    nombre: {
        type: DataTypes.STRING
    },
    precio: {
        type: DataTypes.FLOAT
    }

})

export default Producto;