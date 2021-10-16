import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Icon from './Icon'

/**
 * This component renders passme logo icon inside every input [type="password"]
 * element that can be used to fill a specified password or generate a new
 * password.
 */
function KeyIcon({ element, uuid }) {
  const iconStyles = useSelector(state => state.input.iconStyles)
  return <Icon styles={iconStyles[uuid]} />
}

export default KeyIcon
