import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { FaUserCircle as UserIcon } from 'react-icons/fa'
import styled from 'styled-components'
import { Link, navigate } from 'gatsby'
import { Location } from '@reach/router'
import compose from 'recompose/compose'
import withHandlers from 'recompose/withHandlers'

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
interface NavButtonProps {
  active: boolean
}
const NavButton = styled<NavButtonProps, any>(Button)`
  color: white !important;
  border: ${props => (props.active ? '1px white' : 'unset')};
  border-color: rgba(255, 255, 255, 0.5) !important;
  font-weight: ${props => (props.active ? '700' : '600')};
`

const enhance = compose(
  withHandlers({ onClickSiteTitle: () => () => navigate('/') }),
)

const Header = ({ onClickSiteTitle }: { onClickSiteTitle: () => void }) => (
  <Location>
    {({ location }) => {
      const { pathname } = location

      return (
        <AppBar position="fixed">
          <Toolbar>
            <SiteTitle
              variant="title"
              color="inherit"
              noWrap
              title="Home"
              onClick={onClickSiteTitle}
            >
              erfassen.ch
            </SiteTitle>
            <Spacer />
            <NavButton
              variant={pathname === '/' ? 'outlined' : 'text'}
              component={Link}
              to="/"
              active={(pathname === '/').toString()}
            >
              Home
            </NavButton>
            <NavButton
              variant={pathname === '/Projekte/' ? 'outlined' : 'text'}
              component={Link}
              to="/Projekte/"
              active={(pathname === '/Projekte/').toString()}
            >
              Projekte
            </NavButton>
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

export default enhance(Header)
