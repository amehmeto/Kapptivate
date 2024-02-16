import styled from 'styled-components'
import { useContext } from 'react'
import { UserAccessTableHead } from './UserAccessTableHead.tsx'
import { UserAccessTableRow } from './UserAccessTableRow.tsx'
import { UserAccessTableFoot } from './UserAccessTableFoot.tsx'
import { UserContext } from './UserContext.tsx'

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
          {users.length === 0 && (
            <tr>
              <td colSpan={5} rowSpan={15}>
                No users found
              </td>
            </tr>
          )}
          {users.length > 0 &&
            users.map((user) => (
              <UserAccessTableRow key={user.id} user={user} />
            ))}
        </tbody>
        <UserAccessTableFoot />
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
