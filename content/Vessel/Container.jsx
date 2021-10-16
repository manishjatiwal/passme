import styled from 'styled-components'

const Container = styled.div`
  position: ${props => (props.styles ? 'fixed' : 'inherit')};
  top: ${props => props.styles.top}px;
  left: ${props => props.styles.left}px;
  width: ${props => props.styles.width}px;
`

export default Container
