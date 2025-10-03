const express = require('express');
const router = express.Router();

//Dados ods livros
let livros = [
 
{ id: '1', titulo: 'O Pequeno Príncipe', autor: 'Antoine de Saint-Exupéry', isbn: '978-1731', ano: 1943, disponivel: true },
{ id: '2', titulo: 'Dom Casmurro', autor: 'Machado de Assis', isbn: '978-2129', ano: 1899, disponivel: true },
{ id: '3', titulo: 'Capitães da Areia', autor: 'Jorge Amado', isbn: '978-3437', ano: 1937, disponivel: true },
{ id: '4', titulo: 'O Alquimista', autor: 'Paulo Coelho', isbn: '978-4547', ano: 1988, disponivel: false },
{ id: '5', titulo: 'A Moreninha', autor: 'Joaquim Manuel de Macedo', isbn: '978-4585', ano: 1844, disponivel: true }
];

let proximoIdLivro = 6;

// GET/ - lista todos
router.get('/', (req, res) => {
  res.json(livros);
});

// GET/:id - um livro
router.get('/:id', (req, res) => {
  const livro = livros.find(l => l.id === req.params.id);
  if (!livro) return res.status(404).json({ erro: 'Livro não encontrado' });
  res.json(livro);
});

// POST/ - criar
router.post('/', (req, res) => {
  const { titulo, autor, isbn, ano, disponivel } = req.body;
  if (!titulo || !autor || !isbn) {
    return res.status(400).json({ erro: 'Campos titulo, autor e isbn são obrigatórios' });
  }
  const novoLivro = { id: String(proximoIdLivro++), titulo, autor, isbn, ano: ano || null, disponivel: disponivel ?? true };
  livros.push(novoLivro);
  res.status(201).json(novoLivro);
});

// PUT/:id - atualizar
router.put('/:id', (req, res) => {
  const idx = livros.findIndex(l => l.id === req.params.id);
  if (idx === -1) return res.status(404).json({ erro: 'Livro não encontrado' });

  const { titulo, autor, isbn, ano, disponivel } = req.body;
  if (!titulo || !autor || !isbn) {
    return res.status(400).json({ erro: 'Campos titulo, autor e isbn são obrigatórios' });
  }

  livros[idx] = { ...livros[idx], titulo, autor, isbn, ano: ano || null, disponivel: disponivel ?? livros[idx].disponivel };
  res.json(livros[idx]);
});

// DELETE/:id - deletar
router.delete('/:id', (req, res) => {
  const idx = livros.findIndex(l => l.id === req.params.id);
  if (idx === -1) return res.status(404).json({ erro: 'Livro não encontrado' });

  const removido = livros.splice(idx, 1)[0];
  res.json({ mensagem: 'Livro removido com sucesso', removido });
});

module.exports = router;
