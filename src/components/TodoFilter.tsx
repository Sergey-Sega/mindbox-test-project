import React, { useState } from 'react'
import { Button, Space } from 'antd'
import { useTodoStore } from './store/todoStore'

type FilterType = 'all' | 'active' | 'completed'

export const TodoFilter: React.FC = () => {
  const [filter, setFilter] = useState<FilterType>('all')
  const setFilterState = useTodoStore((state) => state.setFilter) // Сохранение фильтра в Zustand

  const handleFilterChange = (newFilter: FilterType) => {
    setFilter(newFilter)
    setFilterState(newFilter)
  }

  return (
    <div style={{ marginTop: '20px', textAlign: 'center' }}>
      <Space>
        <Button
          type={filter === 'all' ? 'primary' : 'default'}
          onClick={() => handleFilterChange('all')}
        >
          All
        </Button>
        <Button
          type={filter === 'active' ? 'primary' : 'default'}
          onClick={() => handleFilterChange('active')}
        >
          Active
        </Button>
        <Button
          type={filter === 'completed' ? 'primary' : 'default'}
          onClick={() => handleFilterChange('completed')}
        >
          Completed
        </Button>
      </Space>
    </div>
  )
}
