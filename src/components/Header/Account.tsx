import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import { FaUserCircle as UserIcon } from 'react-icons/fa'
import styled from 'styled-components'
import { navigate } from 'gatsby'
import compose from 'recompose/compose'
import withHandlers from 'recompose/withHandlers'

const enhance = compose(
  withHandlers({ onClickSiteTitle: () => () => navigate('/') }),
)

interface Props {}

const Account: React.SFC<Props> = () => (
  <IconButton
    aria-haspopup="true"
    aria-label="Konto"
    onClick={() => console.log('TODO')}
    color="inherit"
    title="Konto"
  >
    <UserIcon />
  </IconButton>
)

export default enhance(Account)
