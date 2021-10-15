import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import KeyIcon from '../KeyIcon'
import Vessel from '../Vessel'
/**
 * This function will render the required Passme React component
 */
function renderPassmeComponents(element) {
  // Return in case Passme already iterated the element
  const identified = Boolean(element.getAttribute('data-passme-identified'))
  if (identified) return

  // Render a Key Component for [type="password"] elements
  if (element.type.toLowerCase() === 'password') {
    element.setAttribute('data-passme-identified', true)

    const body = document.getElementsByTagName('body')[0]
    const keyIconContainer = document.createElement('div')
    const vesselContainer = document.createElement('div')
    body.appendChild(keyIconContainer)
    body.appendChild(vesselContainer)

    ReactDOM.render(<KeyIcon element={element} />, keyIconContainer)
    ReactDOM.render(<Vessel element={element} />, vesselContainer)
  }

  // Render Tracker Component for [type="text"] and [type="email"] elements
}

/**
 * This function will be called when DOM changes occurs
 */
function onDomChange() {
  try {
    const inputElements = document.getElementsByTagName('input')
    if (inputElements && inputElements.length) {
      for (const element of inputElements) {
        renderPassmeComponents(element)
      }
    }
  } catch (error) {
    console.log({ error })
  }
}

/**
 * This component watches DOM for any changes and keeps track of all the input
 * fields on the page
 */
function DomWatcher() {
  useEffect(() => {
    onDomChange()
    const observer = new MutationObserver(function () {
      onDomChange()
    })
    observer.observe(document.getElementsByTagName('body')[0], {
      childList: true,
      subtree: true
    })
    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <div id="passme-dom-watcher" style={{ display: 'none' }}>
      Dom Watcher Embedded
    </div>
  )
}

export default DomWatcher
