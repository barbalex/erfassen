import React from 'react'
import { navigate } from 'gatsby'
import MListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'
import compose from 'recompose/compose'
import withHandlers from 'recompose/withHandlers'
import get from 'lodash/get'

import ErrorBoundary from '../../components/ErrorBoundary'

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
  <ErrorBoundary>
    <>
      <MListItem button onClick={onClickMenuItem}>
        <ListItemText onClick={onClickMenuItem}>
          {get(post, 'frontmatter.title', '(Titel fehlt)')}
        </ListItemText>
      </MListItem>
      <Divider />
    </>
  </ErrorBoundary>
)

export default enhance(TechnDokuMenuItem)
