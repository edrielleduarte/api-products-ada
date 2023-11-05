import express from 'express';
import { ServiceProducts } from '../service/serviceProducts';
import { ProductsModels } from '../models/ProductModels';
const service = express.Router();

service.get('/products', async (req, res) => {
  await ServiceProducts.findAllProducts()
    .then((result) => {
      if (result.length === 0)
        return res.status(200).json({ message: 'Nenhum produto cadastrado!' });
      return res.status(200).send(result);
    })
    .catch((err) => {
      return res.status(400).json({ message: err.message });
    });
});

service.post('/products', async (req, res) => {
  // const { name, price } = req.body;
  const productRegister: ProductsModels = req.body;
  const product = await ServiceProducts.createProducts(productRegister);
  if (product.name === undefined || product.price === undefined)
    return res.status(400).json({ message: 'Erro ao criar produto' });

  return res.status(201).json(product);
});

service.get('/products/:id', async (req, res) => {
  const { id } = req.params;
  const product = await ServiceProducts.findByIdProduct(Number(id));
  if (!product)
    return res.status(400).json({ message: 'Produto não encontrado!' });

  return res.status(200).json(product);
});

service.put('/products/:id', async (req, res) => {
  const { id } = req.params;
  const payload: ProductsModels = req.body;
  const result = await ServiceProducts.update(Number(id), payload);

  if (payload.name === undefined || payload.price === undefined)
    return res.status(400).json({
      message:
        'Erro ao atualizar produto, favor verificar os parametros e seus valores!',
    });
  return res.status(204).json(result);
});

service.delete('/products/:id', async (req, res) => {
  const { id } = req.params;
  const result = await ServiceProducts.delete(Number(id));

  return res.status(204).json(result);
});

export { service };
