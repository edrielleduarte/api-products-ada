import { faker } from '@faker-js/faker';

const db = {
  tabelaProdutos: [],
};

export class Db {
  tabela;
  constructor(tabela) {
    this.tabela = tabela;
  }

  static async create(dados, tabela) {
    const salvar = {
      id: faker.number.int({ min: 1, max: 100 }),
      ...dados,
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent(),
    };
    db[tabela].push(salvar);
    return Promise.resolve(salvar);
  }

  static async findById(id, tabela) {
    const pessoa = db[tabela].find((pessoa) => pessoa.id == id);
    return Promise.resolve(pessoa);
  }

  static async find(tabela) {
    return Promise.resolve(db[tabela]);
  }

  static async update(id, dados, tabela) {
    const index = db[tabela].findIndex((pessoa) => pessoa.id == id);
    db[tabela][index] = {
      ...dados,
      id: Number(id),
      createdAt: db[tabela][index].createdAt,
      updatedAt: faker.date.recent(),
    };
    return Promise.resolve(db.tabelaProdutos[index]);
  }

  static async delete(id, tabela) {
    const index = db[tabela].findIndex((pessoa) => pessoa.id == id);
    db[tabela].splice(index, 1);
    return Promise.resolve(db.tabelaProdutos);
  }
}
