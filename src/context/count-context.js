import * as React from 'react'

export const CountContext = React.createContext()

export const CountProvider = props => {
  const [count, setCount] = React.useState(0)

  return <CountContext.Provider value={{count, setCount}} {...props} />
}

export const useCount = () => {
  const context = React.useContext(CountContext)

  if (!context) {
    throw new Error('useCount must be used within a CountProvider')
  }
  return context
}
