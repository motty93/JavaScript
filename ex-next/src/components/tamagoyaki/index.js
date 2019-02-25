import React from 'react'
import Styled from 'styled-components'
import { Template } from './Template'
import { Provider } from './Context'
import Router from 'next/router'

export class Page extends React.Component {
  static async getInitialProps() {
    return {}
  }

  state = {
    id: this.props.url.query.id,
    takashi: 'たかし',
    morita: '森田'
  }

  onClickTakashi = () => {
    alert('たかし')
    Router.push('/')
  }

  onClickMorita = () => {
    alert(this.state.morita)
  }

  render () {
    return (
      <Provider
        value={{
          ...this.state,
          onClickTakashi: this.onClickTakashi,
          onClickMorita: this.onClickMorita,
        }}
      >
        <Template />
      </Provider>
    )
  }
}
