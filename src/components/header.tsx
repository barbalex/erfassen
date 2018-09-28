import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import { FaUserCircle as UserIcon } from 'react-icons/fa'
import styled from 'styled-components'

const SiteTitle = styled(Typography)`
  display: none;
  @media (min-width: 700px) {
    display: block;
  }
`
const Spacer = styled.div`
  flex-grow: 1;
`

const Header = () => (
  <AppBar position="static">
    <Toolbar>
      <SiteTitle variant="title" color="inherit" noWrap>
        erfassen.ch
      </SiteTitle>
      <Spacer />
      <IconButton
        aria-haspopup="true"
        onClick={() => console.log('TODO')}
        color="inherit"
      >
        <UserIcon />
      </IconButton>
    </Toolbar>
  </AppBar>
)

export default Header
