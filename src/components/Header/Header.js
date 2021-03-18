import React from 'react'
import styled, { css } from 'styled-components'

import {
  BackgroundImgContainer
} from '../Common/BackgroundImgContainer'

import {
  Title
} from '../Common/Title'

const HeaderContainer = styled(BackgroundImgContainer)`
  height: 200px
`

const HeaderTitle = styled(Title)`
  font-size: 2rem;
  padding: 10px;
  border-radius: 4px;
  width: 260px;
  position: absolute;
  bottom: 10%;
  left: 3%;
`

const Header = (props) => (
  <HeaderContainer>
    <HeaderTitle>
      Cinderela Bugada
    </HeaderTitle>
  </HeaderContainer>
)

export default Header
