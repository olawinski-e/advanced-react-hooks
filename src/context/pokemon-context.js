import * as React from 'react'

export const PokemonCacheContext = React.createContext()

function pokemonCacheReducer(state, action) {
  switch (action.type) {
    case 'ADD_POKEMON': {
      return {...state, [action.pokemonName]: action.pokemonData}
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

export const PokemonCacheProvider = props => {
  const [cache, dispatch] = React.useReducer(pokemonCacheReducer, {})
  return <PokemonCacheContext.Provider value={{cache, dispatch}} {...props} />
}

export const usePokemonCache = () => {
  const context = React.useContext(PokemonCacheContext)

  if (!context) {
    throw new Error('Erroooorrr with context')
  }
  return context
}
