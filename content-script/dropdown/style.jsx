import styled from 'styled-components'

export const Container = styled.div`
  position: fixed;
  z-index: 999999;
  top: ${props => props.styles.top}px;
  left: ${props => props.styles.left}px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  background: white;
  width: ${props => props.styles.width}px;
`

export const Item = styled.div`
  padding: 8px;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const Password = styled.div`
  -webkit-text-security: ${props =>
    props.showPassword ? 'none' : 'disc'} !important;
`

export const Actions = styled.div`
  svg {
    width: 12px;
  }
`
