import { create } from 'zustand'
import { Todo } from '../types.ts/Todo'

type FilterType = 'all' | 'active' | 'completed'

type TodoState = {
  todos: Todo[]
  filter: FilterType
  addTodo: (text: string) => void
  toggleTodo: (id: string) => void
  deleteTodo: (id: string) => void
  clearCompleted: () => void
  setFilter: (filter: FilterType) => void
}

export const useTodoStore = create<TodoState>((set) => ({
  todos: [],
  filter: 'all',
  addTodo: (text) =>
    set((state) => ({
      todos: [
        ...state.todos,
        { id: Date.now().toString(), text, completed: false },
      ],
    })),
  toggleTodo: (id) =>
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    })),
  deleteTodo: (id) =>
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    })),
  clearCompleted: () =>
    set((state) => ({
      todos: state.todos.filter((todo) => !todo.completed),
    })),
  setFilter: (filter) =>
    set(() => ({
      filter,
    })),
}))
