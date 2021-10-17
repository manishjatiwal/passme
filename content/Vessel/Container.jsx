import styled from 'styled-components'

const Container = styled.div`
  position: ${props => (props.styles ? 'fixed' : 'inherit')};
  top: ${props => props.styles.top}px;
  left: ${props => props.styles.left}px;
  width: ${props => props.styles.width}px;
  background-color: white;
  overflow: hidden;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`

export default Container
