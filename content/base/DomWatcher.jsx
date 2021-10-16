import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { v4 as uuid } from 'uuid'
import PassmeContainer from './PassmeContainer'
import KeyIcon from '../KeyIcon'
import Vessel from '../Vessel'
import { addItem, updateStyle } from '_redux/inputSlice'
/**
 * This function will render the required Passme React component
 */
function renderPassmeComponents(element, dispatch) {
  // Return in case Passme already iterated the element
  const identified = Boolean(element.getAttribute('data-passme-identified'))
  if (identified) return
  // Render a Key Component for [type="password"] elements
  if (element.type.toLowerCase() === 'password') {
    element.setAttribute('data-passme-identified', true)
    dispatch(addItem({ element, id: uuid() }))
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
        renderPassmeComponents(element, dispatch)
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
  const list = useSelector(state => state.input.list)
  const uuidList = useSelector(state => state.input.uuidList)
  const dispatch = useDispatch()
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
      subtree: true
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
            <KeyIcon element={list[uuid]} uuid={uuid} />
            <Vessel element={list[uuid]} uuid={uuid} />
          </>
        )
      })}
    </PassmeContainer>
  )
}

export default DomWatcher
