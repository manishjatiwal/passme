import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { v4 as uuid } from 'uuid'
import PassmeContainer from './PassmeContainer'
import KeyIcon from '../KeyIcon'
import Vessel from '../Vessel'
import { addItem, updateStyle, toogleVesselVisiblity } from '_redux/inputSlice'

/**
 * This function adds an focus change listiner on provided input elements
 */
function addEventListeners(element, dispatch) {
  const uuid = element.getAttribute('data-passme-identifier')
  element.addEventListener('focus', event => {
    dispatch(toogleVesselVisiblity(uuid))
  })
}

/**
 * This function will keep track all the input elements in document
 */
function addPassmeIdentifier(element, dispatch) {
  // Return if case Passme already iterated the element
  const passmeIdentifierExists = element.getAttribute('data-passme-identifier')
  if (passmeIdentifierExists !== null) return

  // Add a uuid identifier for [type="password"] elements
  if (element.type.toLowerCase() === 'password') {
    const passmeIdentifier = uuid()
    element.setAttribute('data-passme-identifier', passmeIdentifier)
    dispatch(addItem({ uuid: passmeIdentifier }))
    addEventListeners(element, dispatch)
  }

  // Render Tracker Component for [type="text"] and [type="email"] elements
}

/**
 * This function will be called when DOM changes occurs
 */
function onDomChange(dispatch) {
  try {
    const inputElements = document.getElementsByTagName('input')
    if (inputElements && inputElements.length) {
      for (const element of inputElements) {
        addPassmeIdentifier(element, dispatch)
      }
    }
  } catch (error) {
    console.log(error)
  }
}

/**
 * This component watches DOM for any changes and keeps track of all the input
 * fields on the page
 */
function DomWatcher() {
  const uuidList = useSelector(state => state.input.uuidList)
  const dispatch = useDispatch()
  // On DOM changes related to input elements, dispatching updateStyle to
  // update the position coordinates for Passme Components.
  const dipatchUpdateStyles = () => {
    dispatch(updateStyle())
  }
  useEffect(() => {
    onDomChange(dispatch)
    // Add DOM mutation observer to subscribe to any DOM changes
    const observer = new MutationObserver(function () {
      onDomChange(dispatch)
      dipatchUpdateStyles()
    })
    observer.observe(document.getElementsByTagName('body')[0], {
      childList: true,
      subtree: true,
      attributes: true
    })
    window.addEventListener('resize', dipatchUpdateStyles)
    window.addEventListener('scroll', dipatchUpdateStyles)
    return () => {
      observer.disconnect()
      window.removeEventListener('resize', dipatchUpdateStyles)
      window.removeEventListener('scroll', dipatchUpdateStyles)
    }
  }, [])

  return (
    <PassmeContainer>
      Dom Watcher Embedded
      {uuidList.map(uuid => {
        return (
          <>
            <KeyIcon uuid={uuid} />
            <Vessel uuid={uuid} />
          </>
        )
      })}
    </PassmeContainer>
  )
}

export default DomWatcher
