import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import Markdown from 'react-markdown'


import './Content.sass'

import * as posts from '../../posts.json'

/**
 * Também poderia ser:
 * const Content = (props) => {
 */

function useQuery() {
  return new URLSearchParams(useLocation().search)
}

const Content = () => {
  const query = useQuery()
  const idPost = query.get('post')

  return (
    <div className='Content-wrapper'>
      <div className='content-menu'>
        {Object.keys(posts)
          .map((key) =>
            <Link key={key} to={`?post=${key}`}>
              {posts[key].title}
            </Link>
          )}
      </div>
      <div className='content'>
        <h3>{posts[idPost].title}</h3>
        <Markdown>
          {posts[idPost].content}
        </Markdown>
      </div>
    </div>
  )
}

export default Content
