import { create } from "zustand";

export const useTodoStore = create((set) => ({
  todos: [],
  addTodo: (todo) => {
    set((state) => ({ 
      todos: [...state.todos, todo]
    }));
  },
  deleteTodo: (todo) => {
    set((state) => ({
      todos: state.todos.filter((t) => t !== todo)
    }));
  },
  completeTodo: (todo) => {
    set((state) => ({ 
      todos: state.todos.map((t) => 
        t === todo ? {...t, completed: !t.completed} : t
      )
    }));
  },
}))
