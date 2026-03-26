<h1 align="center">
  <a href="">
    <img src="/src/assets/state-management.svg" alt="Boiler Plate">
  </a>
</h1>

# React State Management Task Manager with Zustand Exercise

For this weeks practice you will Create a simple task manager where tasks are managed using Zustand.

## Getting Started with the Project

### Dependency Installation & Startup Development Server:

Once forked and cloned, navigate to the project's root directory and this project uses npm (Node Package Manager) to manage its dependencies.

The command below is a combination of installing dependencies, opening up the project on VS Code and it will run a development server on your terminal.

```bash
npm i && code . && npm run dev
```

### Looking for some hints?

1.  **Zustand Installation**

    - Zustand isn't included in the boiler plate. You'll need to install it using `npm install zustand`.

2.  **State Management with Zustand**
    - When setting up your Zustand store, think of it as a global state container. It should hold all the tasks and provide functions to manipulate them. Follow the naming conventions when you create folders and files. Have a look at the [boilerplate](https://github.com/Technigo/react-zustand-boiler-plate) if you need guidance.
    - The `create` function from Zustand is your starting point. It accepts a setter function to help you define the state and its updater functions. Some code has been added for you to get you started!

3.  **Implement the TodoList component**

    - This is the component from which you will access the global state. Create a form that will allow you to add your task to the list. Display the added tasks in a list, the user should be able to delete and complete each task.

4.  **Integrating Components**

    - In your main `App.jsx`, integrate the TodoList component.

5.  **Testing**

    - Before pushing to GitHub, test your application thoroughly. Add tasks, remove them, and toggle the theme. Ensure everything works seamlessly.

6.  **Committing and Pushing**
    - Use `git add .` to stage your changes, followed by `git commit -m "Your commit message here"` to commit them.
    - Push your changes to the GitHub repository using `git push origin main`.
