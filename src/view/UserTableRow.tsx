import { User } from '../core/models/User.tsx'
import styled from 'styled-components'

export function UserTableRow(props: Readonly<{ user: User }>) {
  return (
    <StyledUserTableRow>
      <td>
        <img src={props.user.avatar} alt="User Avatar" />
        <div>
          <span>{props.user.name}</span>
          <span>{props.user.email.replace(/\s/g, '') + '@gmail.com'}</span>
        </div>
      </td>
      <td>{props.user.groups[0]}</td>
      <td>On {props.user.access.length} products</td>
      <td>{props.user.last_login}</td>
      <td>
        <button>View</button>
      </td>
    </StyledUserTableRow>
  )
}

const StyledUserTableRow = styled.tr`
  display: flex;
  flex-direction: row;

  td {
    img {
      border-radius: 50%;
      width: 24px;
    }

    div {
      display: flex;
      flex-direction: column;
    }
  }
`
