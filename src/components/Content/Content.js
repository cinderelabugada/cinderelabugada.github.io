import React from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'
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
    <p>Talvez você esteja procurando um dos tópicos ao lado.</p>
  </div>
)

const Content = ({ defaultRoute }) => {
  const query = useQuery()
  const { id } = useParams()
  return (
    <div className='Content-wrapper'>
      <div className='content-menu'>
        {Object.keys(posts)
          .map((key) =>
            <Link key={key} to={`/${key}`}>
              {posts[key].title}
            </Link>
          )}
      </div>
      {posts[id || defaultRoute]
        ? (<div className='content'>
            <h3>{posts[id || defaultRoute].title}</h3>
            <Markdown>
              {posts[id || defaultRoute].content}
            </Markdown>
          </div>)
        : <Page404 />
      }
    </div>
  )
}

export default Content
