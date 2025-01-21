import React, { useState } from 'react'
import { Input, Button } from 'antd'
import { useTodoStore } from './store/todoStore'

export const TodoInput: React.FC = () => {
  const [text, setText] = useState('')
  const addTodo = useTodoStore((state) => state.addTodo)

  const handleAdd = () => {
    if (text.trim()) {
      addTodo(text.trim())
      setText('')
    }
  }

  return (
    <div style={{ marginBottom: '20px', display: 'flex', gap: '10px' }}>
      <Input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="What needs to be done?"
        onPressEnter={handleAdd}
      />
      <Button type="primary" onClick={handleAdd}>
        Add
      </Button>
    </div>
  )
}
