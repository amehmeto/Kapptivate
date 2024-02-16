import kapptivateLogo from './assets/kapptivate.svg'
import styled from 'styled-components'

export function TopBar() {
  return (
    <StyledTopBar>
      <img src={kapptivateLogo} alt="Kapptivate Logo" />
    </StyledTopBar>
  )
}

const StyledTopBar = styled.div`
  display: flex;
  justify-content: center;
  color: rgb(255 249 212);
  background-color: rgb(28 74 71);
  height: 60px;

  img {
    width: 120px;
  }
`
