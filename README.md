<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

## 📋 Task Manager - Backend

A aplicação backend é desenvolvida usando NestJS com TypeORM e MySQL. Ela fornece endpoints de autenticação (JWT), registro de usuários e gerenciamento de tarefas como parte da tarefa proposta pela equipe do [Rebate Agro](https://rebateagro.com.br/).

## 🚀 Funcionalidades

- Autenticação JWT
- Registro de Usuários
- Criação, Atualização e Exclusão de Tarefas
- Listagem de Tarefas (associadas ao usuário autenticado)
- Proteção de rotas com Guards (JwtAuthGuard)

## 🛠️ Tecnologias Utilizadas

- [NestJs](https://github.com/nestjs/nest)  ![](https://img.shields.io/badge/--FAFAFF.svg?style=flat&logoColor=DD0031&logo=nestjs "Nest.Js")
- [TypeORM](https://docs.nestjs.com/recipes/sql-typeorm)  ![](https://img.shields.io/badge/--FAFAFF.svg?style=flat&logoColor=DD0031&logo=typeorm "TypeOrm")
- [MySQL](https://dev.mysql.com/doc/)  ![](https://img.shields.io/badge/--build?style=flat&logo=mysql&logoColor=blue&color=white "MySQL")
- [Docker](https://docs.docker.com/?_gl=1*1sk8arg*_gcl_au*MTMyNTQxNDU4OS4xNzM2MjkzODA3*_ga*MTgyNDgwMzcwOC4xNzM2MjkzODA4*_ga_XJWPQMJYHQ*MTczNjI5MzgwNy4xLjEuMTczNjI5MzgwOC41OS4wLjA.)  ![](https://img.shields.io/badge/--FAFAFF.svg?style=flat&logoColor=007cba&logo=docker "Docker")
- [JWT](https://jwt.io/) (JSON Web Token)
- [Bcrypt](https://www.npmjs.com/package/bcrypt) - Para hashing de senhas

## 🏗️ Estrutura do Projeto

```bash
src/
│
├── auth/
│ ├── auth.controller.ts
│ ├── auth.service.ts
│ ├── jwt.strategy.ts
│ └── guards/
│ └── jwt-auth.guard.ts
│
├── users/
│ ├── user.entity.ts
│ ├── users.controller.ts
│ └── users.service.ts
│
├── tasks/
│ ├── task.entity.ts
│ ├── tasks.controller.ts
│ └── tasks.service.ts
│
├── database/
│ ├── entities/
│ ├── migrations/
│ └── ormconfig.ts
│
└── app.module.ts
```

## 📦 Instalação e Configuração

```bash
# Clone o repositório:
$ git clone https://github.com/wilgnersouzadev/task-manager-backend.git
cd task-manager-backend
```

```bash
# Configure as variáveis de ambiente (.env):
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASS=root
DB_NAME=task_manager
JWT_SECRET=seu_segredo
PORT=3000
```

```bash
# Suba o MySQL no Docker (precisa apenas subir o container que a aplicação ja estará rodando no docker):
$ docker-compose up -d
```

```bash
# Instale as dependências:
$ npm install
```

```bash
# Execute as migrações do banco de dados:
$ npm run migration:run
```

## 🛡️ Endpoints Principais

```bash
Auth:
POST /api/auth/register - Registro de usuário
POST /api/auth/login - Login e geração de token JWT

Tasks:
GET /api/tasks - Lista todas as tarefas do usuário autenticado
POST /api/tasks - Cria uma nova tarefa
PUT /api/tasks/:id - Atualiza uma tarefa
DELETE /api/tasks/:id - Exclui uma tarefa
```

## Autor ✍

<a href="https://www.linkedin.com/in/wilgner-souza-stw97/">
 <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/wilgnersouza" width="100px;" alt="Wilgner Souza"/>
 <br />
 <sub><b>Wilgner Souza</b></sub></a> <a href="https://www.linkedin.com/in/wilgner-souza-stw97/" title="Linkedin Wilgner">💻</a>

Feito por Wilgner Souza 😉 </br>

Entre em contato! 👇👇 </br>

<div>
  <a href="https://www.facebook.com/wilgner.souza.stw" target="_blank"><img src="https://img.shields.io/badge/Facebook-1877F2?style=for-the-badge&logo=facebook&logoColor=white" target="_blank"></a>
  <a href="https://www.instagram.com/showtimewill97/" target="_blank"><img src="https://img.shields.io/badge/-Instagram-b80750?style=for-the-badge&logo=instagram&logoColor=white" target="_blank"></a>
  <a href = "mailto:wilgner.showtime@gmail.com"><img src="https://img.shields.io/badge/-Gmail-e83f25?style=for-the-badge&logo=gmail&logoColor=white" target="_blank"></a>
  <a href="https://www.linkedin.com/in/wilgner-souza-stw97/" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-0a66c2?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"></a> 
    <a href="https://api.whatsapp.com/send?phone=5592992806495" target="_blank"><img src="https://img.shields.io/badge/WhatsApp-0aad47?style=for-the-badge&logo=whatsapp&logoColor=white" target="_blank"></a> 
</div>

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Deploy your application to AWS with the help of [NestJS Mau](https://mau.nestjs.com) in just a few clicks.
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
