const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
//Log das requisições
app.use((req, res, next) => {
  console.log("-------### LOG da Requisição ###-------");
  console.log("TIME: ", new Date().toLocaleString());
  console.log("METODO: ", req.method);
  console.log("ROTA: ", req.url);
  next();
});

//IMPORTAR E MAPEAR ROTAS
// importar alunos
const alunosRouter = require('./routes/alunos');
app.use('/alunos', alunosRouter);

app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
})

