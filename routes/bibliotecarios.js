const express = require('express');
const router = express.Router();

// dados em memória
let bibliotecarios = [
  {id: '1', nome: 'Mariana Silva', email: 'mariana@biblioteca.com', matricula: 'B500.70', turno: 'matutino', ativo: true },
  {id: '2', nome: 'João Pereira', email: 'joao@biblioteca.com', matricula: 'B500.48', turno: 'vespertino', ativo: true },
  { id: '3', nome: 'Ana Souza', email: 'ana@biblioteca.com', matricula: '"B500.65', turno: 'noturno', ativo: false },
  { id: '4', nome: 'Carlos Oliveira', email: 'carlos@biblioteca.com', matricula: 'B500.58', turno: 'matutino', ativo: true },
  { id: '5', nome: 'Fernanda Lima', email: 'fernanda@biblioteca.com', matricula: 'B500.37', turno: 'vespertino', ativo: true }
];

let proximoIdBib = 6;

// GET/ - buscar todos
router.get('/', (req, res) => res.json(bibliotecarios));

// GET/:id - buscar pelo id
router.get('/:id', (req, res) => {
  const bib = bibliotecarios.find(b => b.id === req.params.id);
  if (!bib) return res.status(404).json({ erro: '---Bibliotecário não encontrado---' });
  res.json(bib);
});

// POST/ - criar um novo cadastro
router.post('/', (req, res) => {
  const { nome, email, matricula, turno, ativo } = req.body;
  if (!nome || !email || !matricula) {
    return res.status(400).json({ erro: '---Campos nome, email e matricula são obrigatórios---' });
  }
  const novoBib = { id: String(proximoIdBib++), nome, email, matricula, turno: turno || 'não definido', ativo: ativo ?? true };
  bibliotecarios.push(novoBib);
  res.status(201).json(novoBib);
});

// PUT/id - atualizar pelo id
router.put('/:id', (req, res) => {
  const idx = bibliotecarios.findIndex(b => b.id === req.params.id);
  if (idx === -1) return res.status(404).json({ erro: '---Bibliotecário não encontrado---' });

  const { nome, email, matricula, turno, ativo } = req.body;
  if (!nome || !email || !matricula) {
    return res.status(400).json({ erro: '---Campos nome, email e matricula são obrigatórios---' });
  }

  bibliotecarios[idx] = { ...bibliotecarios[idx], nome, email, matricula, turno: turno || bibliotecarios[idx].turno, ativo: ativo ?? bibliotecarios[idx].ativo };
  res.json(bibliotecarios[idx]);
});

// DELETE/:id - deletar pelo id
router.delete('/:id', (req, res) => {
  const idx = bibliotecarios.findIndex(b => b.id === req.params.id);
  if (idx === -1) return res.status(404).json({ erro: 'Bibliotecário não encontrado' });

  const removido = bibliotecarios.splice(idx, 1)[0];
  res.json({ mensagem: 'Bibliotecário removido com sucesso', removido });
});
module.exports = router;
