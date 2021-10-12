import React from 'react'
import ReactDOM from 'react-dom'
import PassMe from './components'

function watchDomChanges() {
  try {
    const inputElements = document.getElementsByTagName('input')
    if (inputElements && inputElements.length) {
      for (const element of inputElements) {
        // Render Key Component for [type="password"] elements
        if (element.type.toLowerCase() === 'password') {
          const dataMutated = Boolean(element.getAttribute('data-passme'))
          if (!dataMutated) {
            element.setAttribute('data-passme', true)
            const keyNode = document.createElement('div')
            keyNode.setAttribute('class', 'pass-me-container')
            element.parentNode.appendChild(keyNode)
            ReactDOM.render(<PassMe element={element} />, keyNode)
          }
        }
      }
    }
  } catch (error) {
    console.log({ error })
  }
}

watchDomChanges()

const [targetNode] = document.getElementsByTagName('body')
const config = { childList: true, subtree: true }
const callback = function (mutationsList) {
  watchDomChanges()
}
const observer = new MutationObserver(callback)
observer.observe(targetNode, config)
