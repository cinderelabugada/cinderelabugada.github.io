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

const Page404 = () => (
  <div>
    <h3>Página Não Encontrada</h3>
  </div>
)

const Content = () => {
  const query = useQuery()
  const idPost = query.get('post') || "sobre"

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
      {posts[idPost]
        ? (<div className='content'>
            <h3>{posts[idPost].title}</h3>
            <Markdown>
              {posts[idPost].content}
            </Markdown>
          </div>)
        : <Page404 />
      }
    </div>
  )
}

export default Content
