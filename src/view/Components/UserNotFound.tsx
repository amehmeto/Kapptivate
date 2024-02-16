import userNotFoundIcon from '../../assets/user-not-found.svg'
import styled from 'styled-components'
import handsUpIcon from '../../assets/hands-up.svg'

export function UserNotFound() {
  return (
    <StyledUserNotFound>
      <td colSpan={5} rowSpan={15}>
        <div>
          <img src={userNotFoundIcon} alt={'No user found icon'} />
          <p>No users for this research</p>
          <p>Please refine your filters to find a matching user.</p>
        </div>
      </td>
    </StyledUserNotFound>
  )
}

const StyledUserNotFound = styled.tr`
  div {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    padding-top: 120px;
    padding-bottom: 120px;

    * {
      margin: 0;
    }

    background: url(${handsUpIcon}) no-repeat right bottom;
  }
`
