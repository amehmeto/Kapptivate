import styled from 'styled-components'
import { useContext } from 'react'
import { UserAccessTableHead } from './UserAccessTableHead.tsx'
import { UserAccessTableRow } from './UserAccessTableRow.tsx'
import { UserAccessTableFoot } from './UserAccessTableFoot.tsx'
import { UserContext } from '../UserContext/UserContext.tsx'
import { UserNotFound } from './UserNotFound.tsx'

export function UserAccessTable() {
  const userStore = useContext(UserContext)

  const {
    userStoreValues: { users },
  } = userStore

  return (
    <StyledUserAccessTable>
      <table>
        <UserAccessTableHead />
        <tbody>
          {users.length === 0 && <UserNotFound />}
          {users.length > 0 &&
            users.map((user) => (
              <UserAccessTableRow key={user.id} user={user} />
            ))}
        </tbody>
        {users.length > 0 && <UserAccessTableFoot />}
      </table>
    </StyledUserAccessTable>
  )
}

const StyledUserAccessTable = styled.div`
  border: 1px solid var(--border-primary);
  border-radius: var(--radius-md);
  overflow: hidden;
  margin-top: 32px;

  table {
    border: 1px solid var(--border-primary);
    width: 100%;
    border-collapse: collapse;
    border-radius: var(--radius-md);
    overflow: hidden;
  }
`
