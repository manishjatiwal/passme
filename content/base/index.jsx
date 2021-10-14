import React from 'react'
import ReactDOM from 'react-dom'

const body = document.getElementsByTagName('body')[0]
const rootElement = document.createElement('div')
body.appendChild(rootElement)

const initContentScript = () => {
  ReactDOM.render(<div>Script Content</div>, rootElement)
}

export default initContentScript
