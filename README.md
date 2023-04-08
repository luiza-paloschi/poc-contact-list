 # Contatos API

Esta é uma API simples de gerenciamento de contatos, que permite criar, atualizar, buscar e excluir informações de contato. A API é escrita em TypeScript, utiliza o Node.js como plataforma de execução e o Express como framework web. O banco de dados utilizado é o PostgreSQL.
Como executar a aplicação

Antes de executar a aplicação, é necessário instalar todas as dependências. Para isso, abra o terminal e execute o comando:

```bash
npm install
```

Em seguida, é necessário configurar as variáveis de ambiente da aplicação. Para isso, crie um arquivo .env na raiz do projeto com as seguintes informações:

```bash
PORT=<port_number>
DATABASE_URL=<database_url>
```

Substitua <port_number> pelo número da porta que deseja utilizar para a aplicação (por exemplo, 5000) e <database_url> pela URL de conexão com o banco de dados PostgreSQL (por exemplo, postgres://user:password@localhost:5432/database_name).

Por fim, para executar a aplicação, execute o comando:

```bash
npm run dev
```

A API estará disponível em http://localhost:<port_number>.

# Como usar a API

A API possui as seguintes rotas:

    GET /contacts: retorna a lista de todos os contatos cadastrados
    GET /contacts/:id: retorna os detalhes de um contato específico, identificado pelo ID
    POST /contacts: cria um novo contato com base nas informações fornecidas no corpo da requisição
    PUT /contacts/:id: atualiza as informações de um contato específico, identificado pelo ID, com base nas informações fornecidas no corpo da requisição
    DELETE /contacts/:id: exclui um contato específico, identificado pelo ID

As informações devem ser fornecidas no corpo das requisições, em formato JSON.