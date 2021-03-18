import React from 'react'
import styled from 'styled-components'

import { Link, useLocation } from 'react-router-dom'
import Markdown from 'react-markdown'

import posts from '../../posts.json'

const ContentMain = styled.div`
  text-align: justify;
  font-family: 'Lato', sans-serif;
`

const ContentContainer = styled.div`
  padding: 15px;
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  align-items: center;
  
  min-height: calc(100vh - 200px - 70px - (2 * 15px));

  @media (max-width: 450px) {
    flex-direction: column;
  }
`

const ContentMenu = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 120px;
  a {
    color: #240724;
    font-weight: bold;
  }
  @media (max-width: 450px) {
    flex-direction: row;
    a::after {
      padding: 5px
      content: '•'
    }
    :last-child::after {
      content: ''
    }
  }
`

const Page404 = () => (
  <ContentMain>
    <h3>Página Não Encontrada</h3>
    <p>Talvez você esteja procurando um dos tópicos ao lado.</p>
  </ContentMain>
)

/**
 * useQuery: hook para obter as query strings do react-router
 */
function useQuery() {
  return new URLSearchParams(useLocation().search)
}

const Content = ({ defaultRoute }) => {
  const query = useQuery()
  const id = query.get('post')
  
  return (
    <ContentContainer>
      <ContentMenu>
        {Object.keys(posts)
          .map((key) =>
            <Link key={key} to={`?post=${key}`}>
              {posts[key].title}
            </Link>
          )}
      </ContentMenu>
      {posts[id || defaultRoute]
        ? (<ContentMain>
            <h3>{posts[id || defaultRoute].title}</h3>
            <Markdown>
              {posts[id || defaultRoute].content}
            </Markdown>
          </ContentMain>)
        : <Page404 />
      }
    </ContentContainer>
  )
}

export default Content
