import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { FaUserCircle as UserIcon } from 'react-icons/fa'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { Location } from '@reach/router'

const SiteTitle = styled(Typography)`
  display: none;
  cursor: pointer;
  @media (min-width: 700px) {
    display: block;
  }
`
const Spacer = styled.div`
  flex-grow: 1;
`
// need to prevent boolean props from being passed to dom
const StyledButton = ({ active, ...rest }: { active: boolean }) => {
  const StyledButton = styled(Button)`
    color: white !important;
    border: ${active ? '1px white' : 'unset'};
    border-color: rgba(255, 255, 255, 0.5) !important;
    font-weight: ${active ? '700' : '600'};
  `
  return <StyledButton {...rest} />
}

const Header = () => (
  <Location>
    {({ location }) => {
      console.log('header', { pathname: location.pathname })
      const { pathname } = location
      return (
        <AppBar position="static">
          <Toolbar>
            <SiteTitle variant="title" color="inherit" noWrap title="Home">
              erfassen.ch
            </SiteTitle>
            <Spacer />
            <StyledButton
              variant={pathname === '/' ? 'outlined' : 'text'}
              onClick={() => console.log('todo')}
              component={Link}
              to="/"
              active={pathname === '/'}
            >
              Home
            </StyledButton>
            <StyledButton
              variant={pathname === '/Projekte/' ? 'outlined' : 'text'}
              onClick={() => console.log('todo')}
              component={Link}
              to="/Projekte/"
              active={pathname === '/Projekte/'}
            >
              Projekte
            </StyledButton>
            <IconButton
              aria-haspopup="true"
              aria-label="Konto"
              onClick={() => console.log('TODO')}
              color="inherit"
              title="Konto"
            >
              <UserIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      )
    }}
  </Location>
)

export default Header
