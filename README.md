# Criar uma API RESTful de produtos com operações CRUD (Create, Read, Update e Delete)

**Requisitos:**

1. Use o Node.js e o Express.js como framework.
2. Crie um conjunto de endpoints RESTful para lidar com produtos. Os endpoints devem seguir as convenções REST, como:
    - **`GET /api/produtos`**: Retorna uma lista de todos os produtos.
    - **`GET /api/produtos/:id`**: Retorna os detalhes de um produto específico com base no ID.
    - **`POST /api/produtos`**: Crie um novo produto.
    - **`PUT /api/produtos/:id`**: Atualize as informações de um produto com base no ID.
    - **`DELETE /api/produtos/:id`**: Exclua um produto com base no ID.
3. Use JSON como formato de troca de dados. Os dados dos produtos podem ser armazenados temporariamente em uma estrutura de dados em memória, como um array.
4. Implemente validação de entrada para garantir que os dados do produto sejam formatados corretamente antes de serem armazenados.
5. Use códigos de status HTTP apropriados em suas respostas (por exemplo, 200 OK, 201 Created, 404 Not Found, 400 Bad Request).
6. Documente sua API de produtos para que outros desenvolvedores possam entender como usá-la. Você pode usar ferramentas como o Swagger para criar uma documentação interativa.
7. Adicione tratamento de erros para lidar com cenários inesperados.
8. Use as melhores práticas de organização de código, como dividir seu código em módulos.