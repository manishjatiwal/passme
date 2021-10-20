import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;

  .random-password {
    margin-top: 16px;
    -webkit-text-security: ${props =>
      props.showPassword ? 'none' : 'disc'} !important;

    .symbol {
      color: ${props => (props.showPassword ? '#c15315' : 'inherit')};
    }

    .digit {
      color: ${props => (props.showPassword ? '#36f' : 'inherit')};
    }
  }

  .random-password-actions {
    margin-top: 16px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    button {
      width: 100%;
    }

    .middle-icon {
      margin: 0 12px;
      align-items: center;
      display: flex;
    }

    svg {
      width: 16px;

      &.sync {
        width: 12px;
      }
    }
  }
`

export default Container
