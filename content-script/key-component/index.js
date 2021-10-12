import React, { useState, useRef, useEffect } from 'react'
import Dropdown from '../dropdown'
import { KeyComponent } from './style'

function getKeyComponent({ element }) {
  const [showDrpdown, toggleShowDrpdown] = useState(false)
  const [positionChangeCount, setPositionChangeCount] = useState(0)
  const keyComponentRef = useRef(null)
  const assignPosition = () => {
    const { top, left, height, width } = element.getBoundingClientRect()
    const style = element.currentStyle || window.getComputedStyle(element)
    if (style.display === 'none') {
      KeyComponent.current.style.display = 'none'
    }
    keyComponentRef.current.style.top = `${top + (height - 16) / 2}px`
    keyComponentRef.current.style.left = `${
      left +
      width -
      parseFloat(style.paddingRight) -
      parseFloat(style.borderRightWidth) -
      16
    }px`
  }
  useEffect(() => {
    const observer = new MutationObserver(function () {
      assignPosition()
    })
    observer.observe(document.getElementsByTagName('body')[0], {
      childList: true,
      subtree: true
    })
    window.addEventListener('resize', assignPosition)
    window.addEventListener('scroll', assignPosition)
    return () => {
      observer.disconnect()
      window.removeEventListener('resize', assignPosition)
      window.removeEventListener('scroll', assignPosition)
    }
  }, [])

  return (
    <>
      <KeyComponent
        ref={keyComponentRef}
        onClick={() => {
          toggleShowDrpdown(!showDrpdown)
        }}
      />
      <Dropdown element={element} showDrpdown={showDrpdown} />
    </>
  )
}

export default getKeyComponent
