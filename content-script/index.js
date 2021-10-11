import React from 'react'
import ReactDOM from 'react-dom'
import KeyComponent from './key-component'

function alterDOM() {
  try {
    const inputElements = document.getElementsByTagName('input')
    if (inputElements && inputElements.length) {
      for (const element of inputElements) {
        const dataMutated = Boolean(element.getAttribute('data-passme'))
        if (!dataMutated && element.type.toLowerCase() === 'password') {
          element.setAttribute('data-passme', true)
          const keyNode = document.createElement('div')
          element.parentNode.appendChild(keyNode)
          ReactDOM.render(<KeyComponent element={element} />, keyNode)
        }
      }
    }
  } catch (error) {
    console.log({ error })
  }
}

alterDOM()

const [targetNode] = document.getElementsByTagName('body')

const config = { childList: true, subtree: true }

const callback = function (mutationsList) {
  alterDOM()
}

const observer = new MutationObserver(callback)

observer.observe(targetNode, config)
