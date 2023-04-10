# API GERENCIADOR DE CARDÁPIO 🍽️

## Sobre

 O projeto se trata de um back-end gerenciador de cardápios onde é possível cadastrar as categorias e os respectivos produtos do seu restaurante. Essa API permite login de administradores e clientes, no entanto, apenas os administradores possuem permissão para alterar os dados do cardápio (criar, atualizar ou deletar).
_______________

### Como executar o projeto em desenvolvimento:
1. Clone esse repositório
2. Instale as dependências

```bash
npm i
```
3. Crie um banco no mongodb e restaure os dados usando o "mongorestore"
```bash
mongorestore --uri <sua URI do MongoDB> dump/test
```
4. Configure o arquivo `.env` usando o arquivo `.env.example`
5. Execute o back-end em um ambiente de desenvolvimento
```bash
npm run dev
```
6. Para mandar requests para o servidor sem precisar de um front-end, você pode instalar uma extensão do vscode chamada `Thunder Client`
## Rotas e objetos necessários

- POST ('/sign-up'): {
    name: string,
    email: string,
    password: string,
    avatar: string,
    adm: boolean || default: false
}
- POST ('/auth/login'): {
    email: string,
    password: string
}
- GET ('/category'): rota autenticada
- GET ('/product'): rota autenticada
- GET ('/product/:id'): rota autenticada
- `Rotas autenticadas e com acesso apenas para administradores:`
- POST ('/product'): {
    name: string,
    qty: number,
    price: number,
    categories:["category_id"]
}
- PATCH ('/product/:id'):{
    name:? string,
    qty:? number,
    price:? number,
    categories:?["category_id"]
}
- DELETE ('/product/:id')

Os objetos possuem validação e, além disso,  lembre-se de configurar o "Bearer TOKEN" na extensão que estiver utilizando em substituição do front-end
#

## Tecnologias utilizadas
- bcrypt e @types/bcrypt: biblioteca utilizada para criptografar as senhas no momento do cadastro do usuário;
- jsonwebtoken e @types/jsonwebtoken: biblioteca utilizada criar o token do usuário no momento do login e sua permanência em uma sessão
- http-status e @types/http-status: biblioteca utilizada oara retornar de forma mais legível os statu HTTP
- dotenv e @types/dotenv: dependência útil para carregar variáeis de ambiente
- joi: auxilia na validação do código
- nodemon: reinicia automaticamente a aplicação qual são detectadas alterações de arquivo no diretório
- express e @types/express: auxilia na criação de servidores com Node por abstrair algumas complexidades de lidar diretamente com o módulo http do Node

<div style="display: inline_block">
  <img align="center" alt="ts" src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" />
  <img align="center" alt="nodejs" src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" />

  <img align="center" alt="MongoDB" src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" />
  <img align="center" alt="Express" src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge" />
  <img align="center" alt="Git" src="https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white"/>
</div><br/>