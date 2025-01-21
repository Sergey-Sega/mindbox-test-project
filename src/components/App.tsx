import React from 'react'
import { Layout, Typography } from 'antd'
import { TodoInput } from './TodoInput'
import { TodoList } from './TodoList'
import { TodoFilter } from './TodoFilter'

const { Header, Content, Footer } = Layout
const { Title } = Typography

const App: React.FC = () => {
  return (
    <Layout style={{ display: 'flex', flexDirection: 'column' }}>
      <Header style={{ backgroundColor: '#001529', padding: '10px' }}>
        <Title level={3} style={{ color: '#fff', textAlign: 'center' }}>
          ToDo App
        </Title>
      </Header>
      <Content
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px',
        }}
      >
        <div style={{ width: '100%', maxWidth: '600px' }}>
          <TodoInput />
          <TodoList />
          <TodoFilter />
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>ToDo App for MindBox</Footer>
    </Layout>
  )
}

export default App
