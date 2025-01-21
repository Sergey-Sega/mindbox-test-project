import React from 'react'
import { List } from 'antd'
import { TodoItem } from './TodoItem'
import { useTodoStore } from './store/todoStore'

export const TodoList: React.FC = () => {
  const todos = useTodoStore((state) => state.todos)
  const filter = useTodoStore((state) => state.filter)

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'active') return !todo.completed
    if (filter === 'completed') return todo.completed
    return true // 'all'
  })

  return (
    <List
      bordered
      dataSource={filteredTodos}
      renderItem={(todo) => <TodoItem todo={todo} />}
    />
  )
}
