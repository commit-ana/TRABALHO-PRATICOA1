// CRUD empréstimos

const express = require('express');
const router = express.Router();


let emprestimos = [
  { id: 1, aluno: "Luiza Eduarda", livro: "Construção de Backend", data: "2025-10-03", status: "emprestado" },
  { id: 2, aluno: "Luiz Gustavo", livro: "Banco de Dados Avançado", data: "2025-09-28", status: "devolvido" },
  { id: 2, aluno: "Ana Carolina", livro: "Cisco CCNA", data: "2025-10-01", status: "emprestado" },
  { id: 2, aluno: "Ana Clara", livro: "Dos 5", data: "2025-09-05", status: "atrasado" }
  
];


router.get('/', (req, res) => {
  res.json(emprestimos);
});


router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const emprestimo = emprestimos.find(e => e.id === id);
  if (!emprestimo) return res.status(404).json({ erro: "Empréstimo não encontrado" });
  res.json(emprestimo);
});


router.post('/', (req, res) => {
  const { aluno, livro, data, status } = req.body;
  const novo = {
    id: emprestimos.length ? emprestimos[emprestimos.length - 1].id + 1 : 1,
    aluno,
    livro,
    data,
    status
  };
  emprestimos.push(novo);
  res.status(201).json(novo);
});


router.put('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const emprestimo = emprestimos.find(e => e.id === id);
  if (!emprestimo) return res.status(404).json({ erro: "Empréstimo não encontrado" });

  const { aluno, livro, data, status } = req.body;
  if (aluno) emprestimo.aluno = aluno;
  if (livro) emprestimo.livro = livro;
  if (data) emprestimo.data = data;
  if (status) emprestimo.status = status;

  res.json(emprestimo);
});

router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = emprestimos.findIndex(e => e.id === id);
  if (index === -1) return res.status(404).json({ erro: "Empréstimo não encontrado" });

  emprestimos.splice(index, 1);
  res.status(204).send();
});

module.exports = router;
