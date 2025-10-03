# TRABALHO-PRATICOA1
Desenvolvimento de uma API REST utilizando Node.js e Express, aplicando os conceitos de API Rest, rotas, métodos HTTP, middlewares, versionamento com Git e documentação básica. O trabalho visa consolidar os conhecimentos sobre construção de backend, colaboração em equipe e uso de ferramentas de desenvolvimento.

O nosso trabalho prático foi desenvolvido a partir da inspiração em outra disciplina do curso, tomando como base a realidade escolar. Escolhemos a escola como cenário principal, pois entendemos que ela é um espaço essencial para o desenvolvimento do conhecimento e da aprendizagem.

Dentro desse contexto, direcionamos o projeto para o funcionamento da biblioteca escolar, abordando de forma específica a gestão de empréstimos de livros, assim como o cadastro e acompanhamento de alunos que utilizam esse serviço e também o papel dos funcionários responsáveis, como o bibliotecário.

O objetivo central foi simular, por meio do sistema criado, um processo mais organizado, ágil e eficiente de controle, permitindo registrar quais livros foram emprestados, a quem foram destinados e o acompanhamento de prazos de devolução. Além disso, a proposta também valoriza a importância do bibliotecário como mediador do acesso à informação e da responsabilidade dos alunos no uso adequado dos materiais disponibilizados pela escola.

Instruções para instalação e execução

npm install --save-dev nodemon 
npm install nodemon  
npm init -y
npm start
npm install express cors
abrir `abrir http://localhost:3000`


Lista de endpoints com exemplos de requisição/resposta
### Endpoints implementados nos CRUDS (Livros, Bibliotecários, Alunos, Professores, Emprestimos)

- GET/livros
- GET/professores/:id
- POST/bibiotecarios (Campos nome, email,matricula são obrigatorios)
- PUT/emprestimos/:id
- DELETE/professores/:id

### Postaman

Collection TRABALHO-PRATICOA1/TRABALHOPRÁTICOA1 - Backend.postman_collection.json




Aluna 1 - Ana Carolina Rosendo,   GITHUB-https://github.com/carolinaarosendo - Fez a configuração inicial do projeto e os CRUDS 1 e 2 (Alunos e Professores), testes no Postman referente ao seu CRUD

Aluna 2 - Ana Clara Lima,   GITHUB- https://github.com/commit-ana - Fez os CRUDS 3 e 4 (Livros e Bibliotecário), testes no Postman referente ao seu CRUD.

Aluna 3 - Luiza Eduarda Batista, GITHUB-https://github.com/Lu-2112 - Fez o CRUD 5 (Empréstimos), testes no Postman e a documentação no README.md.

