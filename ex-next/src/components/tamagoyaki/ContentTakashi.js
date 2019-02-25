import { Consumer } from './Context'

export const ContentTakashi = () => (
  <Consumer>
    {({ onClickTakashi, onClickMorita, morita, id }) => (
      <>
        <p>id: {id}</p>
        <div onClick={onClickTakashi}>
          Hello Takashi
        </div>
        <p onClick={onClickMorita}>{morita}</p>
      </>
    )}
  </Consumer>
)
