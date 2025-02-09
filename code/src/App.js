import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'

import { Game } from 'components/Game'
import { game } from 'reducers/game'

const reducer = combineReducers({game: game.reducer,})

const store = configureStore({reducer})

export const App = () => {

  return (
    <Provider store={store}>
      <Game />
    </Provider>
  )
}
