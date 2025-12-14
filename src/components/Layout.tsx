import { Outlet, useLocation } from 'react-router-dom'
import { Container } from '@mantine/core'
import Navigation from './Navigation'
import classes from './Layout.module.css'

function Layout() {
  const location = useLocation()
  const isHome = location.pathname === '/'

  return (
    <>
      <Container size="xl" className={isHome ? classes.navOverlay : ''}>
        <Navigation />
      </Container>
      <Outlet />
    </>
  )
}

export default Layout

