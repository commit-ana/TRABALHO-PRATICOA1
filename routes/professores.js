// CRUD PROFESSORES - nome, disciplina, email, matricula, turno
const express = require('express')
const router = express.Router()

// mapeamento dos endpoints e a lógica
// Lista de Professores para simular o banco dados
let ListaProfessores = [
  {
    id: 1,
    nome: "Julia Costa",
    disciplina: "Matemática",
    email: "julia@costa.com",
    matricula: "12312345678",
    turno: "Matutino"
  },
  {
    id: 2,
    nome: "Raimundo Silva",
    disciplina: "Sociologia",
    email: "raimundo@silva.com",
    matricula: "12312342258",
    turno: "Vespertino"
  },
  {
    id: 3,
    nome: "Iason Pereira",
    disciplina: "Português",
    email: "iason@pereira.com",
    matricula: "123122222",
    turno: "Matutino"
  },
  {
    id: 4,
    nome: "Ana Luiza",
    disciplina: "Fisica",
    email: "ana@luiza.com",
    matricula: "1234343478",
    turno: "Vespertino"
  }
]
// Criar CRUD
// CRUD PROFESSORES - nome, disciplina, email, matricula, turno
router.post('/', (req, res, next) => {
  const { nome, matricula, email, disciplina, turno } = req.body
  // validar se os dados vinheram
  if (!nome || !matricula || !email || !disciplina || !turno) {
    return res.status(400).json({ error: "nome, matricula, email, disciplina e turno são obrigatorios!!!!" })
  }
  // validar se a matrícula já existe
  const professor = ListaProfessores.find(professor => professor.matricula == matricula)
  if (professor) {
    return res.status(409).json({ error: "Matrícula Já cadastrada!!!" })
  }
  // cadastrar a novo professor na lista
  const novoProfessor = {
    id: Date.now(),
    nome,
    matricula,
    email,
    disciplina,
    turno
  }
  // inserir novo professor montada na lista
  ListaProfessores.push(novoProfessor)
  res.status(201).json({ message: "Professor cadastrado!!!", novoProfessor })
})

// Listar Todos
// - GET /professores
router.get('/', (req, res, next) => {
  res.json(ListaProfessores)
})

// Buscar um
// - GET /professores/{id}
router.get('/:id', (req, res, next) => {
  const idRecebido = req.params.id
  const professor = ListaProfessores.find(a => a.id == idRecebido)
  if (!professor) {
    return res.status(404).json({ error: "Professor não encontrado!!!" })
  }
  res.json(professor)
})
// CRUD PROFESSORES - nome, matrícula, turma, email, turno
// Atualizar
// - PUT /professores/{id}
router.put('/:id', (req, res, next) => {
  const idRecebido = req.params.id
  const { nome, matricula, email, turma, turno } = req.body
  // validar se os dados vinheram
  if (!nome || !matricula || !email || !turma || !turno) {
    return res.status(400).json({ error: "nome, matricula, email, turma e turno são obrigatórios!!!" })
  }
  // validar se a pessoa com aquele ID existe na lista
  const professor = ListaProfessores.find(professor => professor.id == idRecebido)
  if (!professor) {
    return res.status(404).json({ error: "Professor não encontrado!!!"})
  }
  // Sobrescrevo os dados do professor para atualizar
  professor.nome = nome
  professor.email = email
  professor.turma = turma
  professor.turno = turno
  res.json({ message: "Professor atualizado com sucesso!!!" })
})

// Deletar
// - DELETE /professores/{id}
router.delete('/:id', (req, res, next) => {
  const idRecebido = req.params.id
  const professor = ListaProfessores.find(professor => professor.id == idRecebido)
  if(!professor) {
    return res.status(404).json({ error: "Professor não encontrado!!!"})
  }
  // sobrescreve a lista com uma nova sem o professor do idRecebido
  ListaProfessores = ListaProfessores.filter(a => a.id != idRecebido)

  res.json({ message: "Professor excluído com sucesso!!!"})
})

module.exports = router