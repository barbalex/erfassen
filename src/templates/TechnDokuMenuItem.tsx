import React, { Fragment } from 'react'
import { navigate } from 'gatsby'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'
import compose from 'recompose/compose'
import withHandlers from 'recompose/withHandlers'

const enhance = compose(
  withHandlers({
    onClickMenuItem: ({ post }) => () => {
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
  <>
    <ListItem
      button
      data-path={post.frontmatter.path}
      onClick={onClickMenuItem}
    >
      <ListItemText data-path={post.frontmatter.path} onClick={onClickMenuItem}>
        {post.frontmatter.title}
      </ListItemText>
    </ListItem>
    <Divider />
  </>
)

export default enhance(TechnDokuMenuItem)
