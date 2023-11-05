import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import { service } from './controllers/controller';
const { API_PORT, API_HOST } = process.env;

const app = express();
app.use(express.json());
app.use(cors());

app.use(service);
// app.get('/products', async (req, res) => {
//   const productsAll = await Db.find('tabelaProdutos');
//   res.send(productsAll);
// });

// app.post('/products', async (req, res) => {
//   const { name, price } = req.body;
//   const produto = { name, price };
//   await Db.create(produto, 'tabelaProdutos');
//   return res.status(201).json(produto);
// });

// app.get('/products/:id', async (req, res) => {
//   const { id } = req.params;
//   const result = await Db.findById(Number(id), 'tabelaProdutos');
//   console.log(result);
//   res.json(result);
// });

// app.put('/products/:id', async (req, res) => {
//   const { id } = req.params;
//   const { name, price } = req.body;
//   const payload = { name, price };
//   const result = await Db.update(Number(id), payload, 'tabelaProdutos');
//   res.json(result);
// });

// app.delete('/products/:id', async (req, res) => {
//   const { id } = req.params;
//   const result = await Db.delete(Number(id), 'tabelaProdutos');
//   res.status(204).json(result);
// });

// Db.create({ name: 'teste', price: 199 }, 'tabelaProdutos').then((res) =>
//   console.log(res),
// );

app.listen(API_PORT, () => {
  console.log(`Server started ${API_HOST}:${API_PORT}`);
});
