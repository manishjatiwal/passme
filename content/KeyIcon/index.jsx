import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toogleVesselVisiblity } from '_redux/inputSlice'
import Icon from './Icon'

/**
 * This component renders passme logo icon inside every input [type="password"]
 * element that can be used to fill a specified password or generate a new
 * password.
 */
function KeyIcon({ uuid }) {
  const iconStyles = useSelector(state => state.input.iconStyles)
  const dispatch = useDispatch()
  return (
    <Icon
      styles={iconStyles[uuid]}
      onClick={() => {
        dispatch(toogleVesselVisiblity(uuid))
      }}
    />
  )
}

export default KeyIcon
