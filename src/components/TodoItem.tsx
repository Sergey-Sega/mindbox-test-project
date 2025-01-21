import React from 'react'
import { Checkbox, Button, List } from 'antd'
import { Todo } from './types.ts/Todo'
import { useTodoStore } from './store/todoStore'

type Props = {
  todo: Todo
}

export const TodoItem: React.FC<Props> = ({ todo }) => {
  const toggleTodo = useTodoStore((state) => state.toggleTodo)
  const deleteTodo = useTodoStore((state) => state.deleteTodo)

  return (
    <List.Item
      actions={[
        <Button type="link" danger onClick={() => deleteTodo(todo.id)}>
          Delete
        </Button>,
      ]}
    >
      <Checkbox checked={todo.completed} onChange={() => toggleTodo(todo.id)}>
        {todo.text}
      </Checkbox>
    </List.Item>
  )
}
