import React from 'react'
import Styled from 'styled-components'
import { ContentTakashi } from './ContentTakashi'

export const Template = () => (
  <Layout>
    <Header />
    <Main>
      <Content/>
    </Main>
  </Layout>
)
const Layout = Styled.div`
  background-color: green;
  width: 100%;
  height: 100vh;
`
const Header = Styled.div`
  background-color: yellow;
    width: 100%;
  height: 10%;
`
const Main = Styled.div`
  background-color: red;
    width: 100%;
  height: 10%;
`
const Content = Styled(ContentTakashi)`
  background-color: blue;
    width: 100%;
  height: 10%;
`
