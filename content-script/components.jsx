import React, { useState, useEffect } from 'react'
import Dropdown from './dropdown'
import { Key } from './style'
import GlobalStyle from './global-styles'

function Component({ element }) {
  const [showDropdown, toggleShowDropdown] = useState(false)
  const [iconStyles, setIconStyles] = useState({
    top: -100,
    left: -100
  })
  const [dropdownStyles, setDropdownStyles] = useState({
    top: -100,
    left: -100
  })
  const setCoordinates = () => {
    const { top, left, height, width } = element.getBoundingClientRect()
    const style = element.currentStyle || window.getComputedStyle(element)
    setIconStyles({
      top: top + (height - 16) / 2,
      left:
        left +
        width -
        parseFloat(style.paddingRight) -
        parseFloat(style.borderRightWidth) -
        16
    })
    setDropdownStyles({
      top: top + height,
      left,
      width
    })
  }
  useEffect(() => {
    setCoordinates()
    const observer = new MutationObserver(function () {
      setCoordinates()
    })
    observer.observe(document.getElementsByTagName('body')[0], {
      childList: true,
      subtree: true
    })
    window.addEventListener('resize', setCoordinates)
    window.addEventListener('scroll', setCoordinates)
    return () => {
      observer.disconnect()
      window.removeEventListener('resize', setCoordinates)
      window.removeEventListener('scroll', setCoordinates)
    }
  }, [])

  return (
    <>
      <GlobalStyle />
      <Key
        styles={iconStyles}
        onClick={() => {
          toggleShowDropdown(!showDropdown)
        }}
      />
      <Dropdown showDropdown={showDropdown} styles={dropdownStyles} />
    </>
  )
}

export default Component
