const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

//IMPORTAR E MAPEAR ROTAS

app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
})

