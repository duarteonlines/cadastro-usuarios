# Projeto Cadastro de Usuários

Este projeto é uma aplicação web simples para cadastrar usuários, construída com Node.js, MongoDB e Prisma ORM. Ele permite criar, ler, atualizar e deletar usuários através de uma API.

## Descrição

O projeto consiste em um backend que expõe endpoints para interagir com um banco de dados MongoDB através do Prisma ORM. Os principais recursos incluem:

- Registro de novos usuários
- Listagem de todos os usuários
- Detalhes de um usuário específico
- Atualização de informações de um usuário
- Exclusão de um usuário

## Pré-requisitos

- Node.js (versão LTS recomendada)
- Yarn ou npm para gerenciamento de pacotes
- MongoDB instalado e funcionando

## Instalação

### Docker
1. Clone o repositório para a sua máquina local.
2. Navegue até o diretório do projeto no terminal.
3. Monte a imagem utilizando `docker build -t <nome-da-imagem> .` e depois `docker run -p 3000:3000 <nome-da-imagem>`.

### Manual
1. Clone o repositório para a sua máquina local.
2. Navegue até o diretório do projeto no terminal.
3. Instale as dependências executando `yarn install` ou `npm install`.
4. Copie o arquivo `.env.example` para `.env` e ajuste as variáveis de ambiente conforme necessário, especialmente a URI do [MongoDB](https://www.mongodb.com/).
5. Execute `npx prisma db push` para criar o esquema do banco de dados no MongoDB.

## Uso

Para iniciar o servidor, execute o comando: `node server.js`


O servidor estará rodando na porta 3000. Você pode então testar os endpoints usando ferramentas como Postman ou cURL.

## Endpoints

### Usuários

- **GET /usuarios/** - Lista todos os usuários.
- **POST /usuarios/** - Registra um novo usuário.
- **GET /usuarios/{id}** - Obtém detalhes de um usuário específico.
- **PUT /usuarios/{id}** - Atualiza um usuário existente.
- **DELETE /usuarios/{id}** - Remove um usuário.

## Exemplo Requisição

```
{
    "email" : "igor@email.com",
    "name" : "Igor Diniz",
    "age" : 21
}
```

## Contribuição

Contribuições são bem-vindas Se você encontrar algum bug ou deseja adicionar novas funcionalidades, sinta-se à vontade para enviar um Pull Request.

---
