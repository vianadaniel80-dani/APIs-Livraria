# APIs-Livraria
API RESTful de Livraria desenvolvida com Node.js, Express e MongoDB (via Mongoose). Utiliza arquitetura MVC para organizar modelos, controladores e rotas. Conta com Nodemon para hot reload, Dotenv para variáveis de ambiente e suporte a buscas complexas por query strings, garantindo um back-end escalável e modular.

src/
├── config/             # Configuração do DB (dbConnect.js)
├── controllers/        # Lógica de negócio (livroController.js)
├── models/             # Schemas do Mongoose (Livro.js, Autor.js)
├── routes/             # Definição das rotas (index.js, livroRoutes.js)
├── app.js              # Configuração do Express
server.js               # Inicialização do servidor (ponto de entrada)
.env  
