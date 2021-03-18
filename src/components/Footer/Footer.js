import React from 'react'
import styled from 'styled-components'

import {
  BackgroundImgContainer
} from '../Common/BackgroundImgContainer'

import {
  Title
} from '../Common/Title'

const FooterContainer = styled(BackgroundImgContainer)`
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const FooterLinks = styled(Title)`
  border-radius: 4px;
  width: 25vw;
  padding: 5px;
  font-size: 1rem;

  display: flex;
  align-items: center;
  justify-content: space-around;
`

const Footer = () => (
  <FooterContainer>
    <FooterLinks>
      <a href='https://twitch.tv/cinderelabugada'>Twitch</a>
      <a href='https://twitter.com/bugadacinderela'>Twitter</a>
      <a href='https://github.com/cinderelabugada'>GitHub</a>
    </FooterLinks>
  </FooterContainer>
)

export default Footer
