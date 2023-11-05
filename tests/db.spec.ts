import { Db } from "../src/db/db.js"


describe("#Db testing case", () => {
    let baseProduct = {
        name: "teste",
        price: 199
    }

    let product: any

    beforeEach(async () => {
        product = await Db.create({ name: baseProduct.name, price: baseProduct.price }, "tabelaProdutos")
        expect({ name: product.name, price: product.price }).toEqual({ name: "teste", price: 199 })
    })

    it("should be create a product", async () => {
        const product = await Db.create({ name: baseProduct.name, price: baseProduct.price }, "tabelaProdutos")
        expect({ name: product.name, price: product.price }).toEqual({ name: "teste", price: 199 })
    })

    it("should be find a product by id", async () => {
        const resProduct = await Db.findById(product.id, "tabelaProdutos")
        expect(resProduct).toEqual(product)
    })

    it("should be find all products", async () => {
        const products: any[] = await Db.find("tabelaProdutos")
        expect(products.length).toEqual(4)
    })

    it("should be delete a product", async () => {
        const resProduct: any[] = await Db.delete(product.id, "tabelaProdutos")
        expect(resProduct.length).toEqual(4)
    })

    it("should be update a product", async () => {
        const payload = {
            name: "teste 2",
            price: 300
        }
        const foundProduct = await Db.findById(product.id, "tabelaProdutos")
        const resProduct: any = await Db.update(foundProduct.id, payload, "tabelaProdutos")
        expect({ name: resProduct.name, price: resProduct.price }).toEqual(payload)
    })
})