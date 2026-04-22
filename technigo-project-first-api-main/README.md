# First API

Replace this readme with your own information about the project. You can include things like:

- In this assignment I have created an API with some endpoints in the provided data.

- I set up mongoose and used Cors, expressListEndPoints and Body Parser as my middlewares.
- I used a general setup where most endpoints can be reached through /books/ except for the object_id which has it's own endpoint.

GET /books/:object_id          — specific resource by Object_id
GET /books?title=harry&authors=rowling  — flexible search

## View it live

https://technigo-projects-technigo-project-first.onrender.com

## Getting Started with the Project

### Dependency Installation & Startup Development Server

Once cloned, navigate to the project's root directory and this project uses npm (Node Package Manager) to manage its dependencies.

The command below is a combination of installing dependencies, opening up the project on VS Code and it will run a development server on your terminal.

```bash
npm i && code . && npm run dev
```
