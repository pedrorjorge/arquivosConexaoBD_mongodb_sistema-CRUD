Esta é uma API RESTful desenvolvida em Node.js utilizando o framework Express e o Mongoose para conexão e manipulação de dados em um banco de dados MongoDB. O projeto permite o gerenciamento completo de registros de vendas mensais (operações de CRUD: Criar, Ler, Atualizar e Deletar).

🚀 Tecnologias Utilizadas

Node.js - Ambiente de execução JavaScript

Express - Framework web para Node.js

Mongoose - ODM (Object Data Modeling) para MongoDB em Node.js

dotenv - Módulo para carregar variáveis de ambiente de um arquivo .env


📡 Rotas da API (CRUD)

POST /vendas - Cadastra uma nova venda

GET /vendas - Lista todas as vendas cadastradas

PUT /vendas/:id - Atualiza uma venda pelo ID

DELETE /vendas/:id - Remove uma venda pelo ID


```text
Estrutura de Arquivos
├── .env                # Variáveis de ambiente sensíveis
├── api.js              # Arquivo principal do servidor e rotas da API
├── vendaMensal.js      # Schema/Model do Mongoose para as vendas
└── package.json        # Dependências e scripts do projeto
```
