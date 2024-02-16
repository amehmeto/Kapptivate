import styled from 'styled-components'

export function UserAccessTableHead() {
  return (
    <StyledUserAccessTableHead>
      <tr>
        <th>User</th>
        <th>Teams</th>
        <th>Access</th>
        <th>Last Login</th>
        <th></th>
      </tr>
    </StyledUserAccessTableHead>
  )
}

const StyledUserAccessTableHead = styled.thead`
  border: 0;
  color: var(--text-secondary);
  background-color: var(--surface-secondary);

  th {
    text-align: left;
    padding: 10px 20px;
  }
`
