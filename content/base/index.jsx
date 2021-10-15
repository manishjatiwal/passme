import React from 'react'
import ReactDOM from 'react-dom'
import DomWatcher from './DomWatcher'
import { Provider } from 'react-redux'
import { store } from '_redux/store'

const body = document.getElementsByTagName('body')[0]
const rootElement = document.createElement('div')
body.appendChild(rootElement)

function App() {
  return (
    <Provider store={store}>
      <DomWatcher />
    </Provider>
  )
}

const initContentScript = () => {
  ReactDOM.render(<App />, rootElement)
}

export default initContentScript
