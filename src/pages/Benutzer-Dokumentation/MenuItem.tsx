import React from 'react'
import { navigate } from 'gatsby'
import MListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'
import compose from 'recompose/compose'
import withHandlers from 'recompose/withHandlers'

interface ListItemProps {
  active: string
}

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
  <>
    <MListItem button onClick={onClickMenuItem}>
      <ListItemText onClick={onClickMenuItem}>
        {post.frontmatter.title}
      </ListItemText>
    </MListItem>
    <Divider />
  </>
)

export default enhance(TechnDokuMenuItem)
