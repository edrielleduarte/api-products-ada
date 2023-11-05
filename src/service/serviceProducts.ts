import { Db } from '../db/db';
import { ProductsModels } from '../models/ProductModels';

export class ServiceProducts {
  static async findAllProducts() {
    const productsAll = await Db.find('tabelaProdutos');
    return productsAll;
  }

  static async createProducts(payload: ProductsModels) {
    // const produto = { name, price };
    const product = await Db.create(payload, 'tabelaProdutos');
    return product;
  }

  static async findByIdProduct(id: number) {
    const result = await Db.findById(id, 'tabelaProdutos');
    return result;
  }

  static async update(id: number, { name, price }: ProductsModels) {
    const payload = { name, price };
    const result = await Db.update(id, payload, 'tabelaProdutos');
    return result;
  }

  static async delete(id: number) {
    const result = await Db.delete(id, 'tabelaProdutos');
    return result;
  }
}
