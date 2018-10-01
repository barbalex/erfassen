import React from 'react'
import { navigate } from 'gatsby'
import MListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'
import compose from 'recompose/compose'
import withHandlers from 'recompose/withHandlers'
import { Location } from '@reach/router'
import styled from 'styled-components'

interface ListItemProps {
  active: string
}
const ListItem = styled<ListItemProps, any>(MListItem)`
  background-color: ${props =>
    props.active === 'true' ? '#eaeaea' : 'unset'} !important;
`

const enhance = compose(
  withHandlers({
    onClickMenuItem: ({ post }: { post: any }) => () => {
      navigate(`${post.frontmatter.path}/`)
    },
  }),
)

const TechnDokuMenuItem = ({
  post,
  onClickMenuItem,
}: {
  post: any
  onClickMenuItem: () => void
}) => (
  <Location>
    {({ location }) => {
      const { pathname } = location
      const active = (
        `${post.frontmatter.path}/` === location.pathname
      ).toString()

      return (
        <>
          <ListItem
            button
            data-path={post.frontmatter.path}
            onClick={onClickMenuItem}
            active={active}
          >
            <ListItemText
              data-path={post.frontmatter.path}
              onClick={onClickMenuItem}
            >
              {post.frontmatter.title}
            </ListItemText>
          </ListItem>
          <Divider />
        </>
      )
    }}
  </Location>
)

export default enhance(TechnDokuMenuItem)
