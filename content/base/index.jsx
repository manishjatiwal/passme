import React from 'react'
import ReactDOM from 'react-dom'
import DomWatcher from './DomWatcher'

const body = document.getElementsByTagName('body')[0]
const rootElement = document.createElement('div')
body.appendChild(rootElement)

const initContentScript = () => {
  ReactDOM.render(<DomWatcher />, rootElement)
}

export default initContentScript
