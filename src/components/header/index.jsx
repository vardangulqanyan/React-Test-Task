import React from 'react'
import { Link, useLocation, useHistory } from 'react-router-dom'
import { Layout, Menu } from 'antd'
import {
  HOME_ROUTE,
  CART_ROUTE,
  LOGIN_ROUTE,
  REGISTER_ROUTE,
} from '../../navigation/constants'
import { useAuth } from '../../context/AuthContext'

const { Header } = Layout

const MyHeader = () => {
  const { currentUser, logout } = useAuth()
  const user = currentUser
  const { pathname } = useLocation()
  const history = useHistory()

  const handleLogout = async () => {
    try {
      await logout()
      history.push(LOGIN_ROUTE)
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
      <div className="logo">
        <Link to="/">
          <img
            src={require('../../asset/img/logo.png').default}
            className="logo__image"
            alt="Logo"
          />
        </Link>
      </div>
      <Menu theme="dark" mode="horizontal" style={{ float: 'right' }}>
        {user ? (
          <>
            <Menu.Item
              key={'home'}
              className={
                pathname === HOME_ROUTE ? 'ant-menu-item-selected' : ''
              }
            >
              <Link to={HOME_ROUTE}>Home</Link>
            </Menu.Item>

            <Menu.Item
              key={'/cards'}
              className={
                pathname === CART_ROUTE ? 'ant-menu-item-selected' : ''
              }
            >
              <Link to={CART_ROUTE}>Carts</Link>
            </Menu.Item>

            <Menu.Item key={'logout'} onClick={handleLogout}>
              Logout
            </Menu.Item>
          </>
        ) : (
          <>
            <Menu.Item
              key={'login'}
              className={
                pathname === LOGIN_ROUTE ? 'ant-menu-item-selected' : ''
              }
            >
              <Link to={LOGIN_ROUTE}>Login</Link>
            </Menu.Item>

            <Menu.Item
              key={'register'}
              className={
                pathname === REGISTER_ROUTE ? 'ant-menu-item-selected' : ''
              }
            >
              <Link to={REGISTER_ROUTE}>Register</Link>
            </Menu.Item>
          </>
        )}
      </Menu>
    </Header>
  )
}

export default MyHeader
