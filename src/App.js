import React from 'react'
import { Layout } from 'antd'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import { FirestoreProvider } from './context/FirestoreContext'
import { MyFooter, MyHeader } from './components'
import AppRouter from './navigation/AppRouter'

const { Content } = Layout

function App() {
  return (
    <BrowserRouter>
      <FirestoreProvider>
        <AuthProvider>
          <Layout className="layout">
            <MyHeader />
            <Content>
              <div className="site-layout-content">
                <AppRouter />
              </div>
            </Content>
            <MyFooter />
          </Layout>
        </AuthProvider>
      </FirestoreProvider>
    </BrowserRouter>
  )
}

export default App
