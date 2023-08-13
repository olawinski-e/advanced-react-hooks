//useComposition: props drilling
// http://localhost:3000/isolated/exercise/07.js

import * as React from 'react'

const Composition = () => {
  const [currentUser, setCurrentUser] = React.useState(null)

  return (
    <div style={{display: 'flex', flexDirection: 'column', height: '100%'}}>
      <div
        style={{
          backgroundColor: 'lightgrey',
        }}
      >
        <Header />
      </div>
      <div style={{flex: 1}}>
        {currentUser ? (
          <Dashboard>
            <DashboardNav />
            <DashboardContent>
              <WelcomeMessage user={currentUser} />
            </DashboardContent>
          </Dashboard>
        ) : (
          <LoginScreen onLogin={() => setCurrentUser({name: 'Estelle'})} />
        )}
      </div>
      <div style={{backgroundColor: 'lightgrey'}}>
        <Footer />
      </div>
    </div>
  )
}

const Header = () => {
  return (
    <div>
      <h1>Header</h1>
    </div>
  )
}

const Dashboard = ({children}) => {
  return (
    <div>
      <h2>The Dashboard</h2>

      {children}
    </div>
  )
}

const DashboardNav = () => {
  return (
    <div>
      <h3>Dashboard Nav</h3>
    </div>
  )
}

const DashboardContent = ({children}) => {
  return (
    <div>
      <h3>Dashboard Content</h3>
      {children}
    </div>
  )
}

const WelcomeMessage = ({user}) => {
  return (
    <div>
      <p>Welcome {user.name} !</p>
    </div>
  )
}

const LoginScreen = ({onLogin}) => {
  return (
    <div>
      <h3>Please Login</h3>

      <button onClick={onLogin}>Login</button>
    </div>
  )
}

const Footer = () => {
  return (
    <div>
      <h1>Footer</h1>
    </div>
  )
}

export default Composition
