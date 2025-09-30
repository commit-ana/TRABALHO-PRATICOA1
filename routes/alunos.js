// CRUD ALUNOS - nome, matrícula, turma, email, turno
// Implementa CRUD de Alunos
const express = require('express')
const router = express.Router()

// mapeamento dos endpoints e a lógica
// Lista de Alunos para simular o banco dados
let ListaAlunos = [
  {
    id: 1,
    nome: "João Pedro",
    matricula: "12312345678",
    email: "joao@pedro.com",
    turma: "202512A",
    turno: "Matutino"
  },
  {
    id: 2,
    nome: "Carolina Silva",
    matricula: "12312345678",
    email: "carolina@silva.com",
    turma: "202512B",
    turno: "Matutino"
  },
  {
    id: 3,
    nome: "Guilherme Souza",
    matricula: "12312345666",
    email: "guilherme@souza.com",
    turma: "202512E",
    turno: "Vespertino"
  },
  {
    id: 4,
    nome: "Juliano Lima",
    matricula: "123134345678",
    email: "juliano@lima.com",
    turma: "202512B",
    turno: "Vespertino"
  }
]
// Criar CRUD
// - POST /alunos
// CRUD ALUNOS - nome, matrícula, turma, email, turno
router.post('/alunos', (req, res, next) => {
  const { nome, matricula, email, turma, turno } = req.body
  // validar se os dados vinheram
  if (!nome || !matricula || !email || !turma || !turno) {
    return res.status(400).json({ error: "nome, matricula, email, turma e turno são obrigatorios!!!!" })
  }
  // validar se a matrícula já existe
  const aluno = ListaAlunos.find(aluno => aluno.matricula == matricula)
  if (aluno) {
    return res.status(409).json({ error: "Matrícula Já cadastrada!!!" })
  }
  // cadastrar a novo aluno na lista
  const novoAluno = {
    id: Date.now(),
    nome,
    matricula,
    email,
    turma,
    turno
  }
  // inserir novo aluno montada na lista
  ListaAlunos.push(novoAluno)
  res.status(201).json({ message: "Aluno cadastrado!!!", novoAluno })
})

// Listar Todos
// - GET /alunos
router.get('/', (req, res, next) => {
  res.json(ListaAlunos)
})

// Buscar um
// - GET /alunos/{id}
router.get('/:id', (req, res, next) => {
  const idRecebido = req.params.id
  const aluno = ListaAlunos.find(a => a.id == idRecebido)
  if (!aluno) {
    return res.status(404).json({ error: "Aluno não encontrado!!!" })
  }
  res.json(aluno)
})
// CRUD ALUNOS - nome, matrícula, turma, email, turno
// Atualizar
// - PUT /alunos/{id}
router.put('/:id', (req, res, next) => {
  const idRecebido = req.params.id
  const { nome, matricula, email, turma, turno } = req.body
  // validar se os dados vinheram
  if (!nome || !matricula || !email || !turma || !turno) {
    return res.status(400).json({ error: "nome, matricula, email, turma e turno são obrigatórios!!!" })
  }
  // validar se a pessoa com aquele ID existe na lista
  const aluno = ListaAlunos.find(aluno => aluno.id == idRecebido)
  if (!aluno) {
    return res.status(404).json({ error: "Aluno não encontrado!!!"})
  }
  // Sobrescrevo os dados do aluno para atualizar
  aluno.nome = nome
  aluno.email = email
  aluno.turma = turma
  aluno.turno = turno
  res.json({ message: "Aluno atualizado com sucesso!!!" })
})

// Deletar
// - DELETE /alunos/{id}
router.delete('/:id', (req, res, next) => {
  const idRecebido = req.params.id
  const aluno = ListaAlunos.find(aluno => aluno.id == idRecebido)
  if(!aluno) {
    return res.status(404).json({ error: "Aluno não encontrado!!!"})
  }
  // sobrescreve a lista com uma nova sem o aluno do idRecebido
  ListaAlunos = ListaAlunos.filter(a => a.id != idRecebido)

  res.json({ message: "Aluno excluído com sucesso!!!"})
})

module.exports = router