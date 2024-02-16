import styled from 'styled-components'

export function UserTableHead() {
  return (
    <StyledUserTableHead>
      <tr>
        <th>User</th>
        <th>Teams</th>
        <th>Access</th>
        <th>Last Login</th>
        <th></th>
      </tr>
    </StyledUserTableHead>
  )
}

const StyledUserTableHead = styled.thead``
