import { NavLink, useLocation } from 'react-router-dom'
import { Group } from '@mantine/core'
import classes from './Navigation.module.css'

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Nous', path: '/nous' },
  { label: 'Infos', path: '/infos' },
  { label: 'RSVP', path: '/rsvp' },
  { label: 'Registry', path: '/registry' },
]

function Navigation() {
  const location = useLocation()
  const isHome = location.pathname === '/'

  return (
    <nav className={classes.nav} style={isHome ? { borderBottomColor: 'rgba(255, 255, 255, 0.2)' } : undefined}>
      <Group gap="xl" justify="center" wrap="nowrap">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `${classes.navLink} ${isActive ? classes.active : ''}`
            }
            style={isHome ? { color: 'white' } : undefined}
          >
            {item.label}
          </NavLink>
        ))}
      </Group>
    </nav>
  )
}

export default Navigation

