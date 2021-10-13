import React from 'react'
import { Actions as Container } from './style'
import Eye from 'icons/actions/eye'
import Sync from 'icons/actions/sync'
import EyeSlash from 'icons/actions/eye-slash'
import Sliders from 'icons/actions/sliders'

function Actions({ showPassword, setshowPassword, generateNewPassword }) {
  return (
    <Container>
      {showPassword ? (
        <Sync
          className="sync"
          onClick={() => {
            generateNewPassword()
          }}
        />
      ) : null}
      <div
        onClick={() => {
          setshowPassword(!showPassword)
        }}
      >
        {showPassword ? <EyeSlash /> : <Eye />}
      </div>
      <Sliders />
    </Container>
  )
}

export default Actions
