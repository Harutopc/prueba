import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors'

import ProductosRoutes from './src/routes/productos.js'


let app = express();
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
    return res.json({ result: 'OK'});
})

app.use("/productos", ProductosRoutes);

export default app;