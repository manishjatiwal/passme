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

export const Generator = styled.div`
  padding: 8px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  user-select: none;
`

export const Password = styled.div`
  font-size: 16px;
  -webkit-text-security: ${props =>
    props.showPassword ? 'none' : 'disc'} !important;

  .symbol {
    color: ${props => (props.showPassword ? '#c15315' : 'inherit')};
  }

  .digit {
    color: ${props => (props.showPassword ? '#36f' : 'inherit')};
  }
`

export const Actions = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  cursor: pointer;

  div {
    margin: 0 12px;
  }

  svg {
    width: 16px;

    &.sync {
      width: 12px;
    }
  }
`

export const Settings = styled.div`
  padding: 8px;
`

export const Button = styled.div`
  padding: 8px;

  button {
    width: 100%;
    cursor: pointer;
  }
`
