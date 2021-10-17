import styled from 'styled-components'

const PassmeContainer = styled.div.attrs({
  id: 'passme-app-container'
})`
  position: fixed;
  z-index: 999999;
  top: -100px;
  left: -100px;
  font-family: monospace;
`

export default PassmeContainer
