import styled from 'styled-components'
import { useEffect, useState } from 'react'
import { User } from '../core/models/User.tsx'
import teamsIcon from '../assets/teams.svg'
import { format } from 'date-fns'
import moreIcon from '../assets/more-horizontal.svg'
import { FetchUserRepository } from '../infra/repositories/FetchUserRepository.tsx'
import leftArrowIcon from '../assets/arrow-left.svg'
import rightArrowIcon from '../assets/arrow-right.svg'

const userRepository = new FetchUserRepository()

export function UserAccessTable() {
  const [users, setUsers] = useState<User[]>([])
  const [totalPage, setTotalPage] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    userRepository
      .getUsersPage(currentPage, 5)
      .then(({ users, totalPage }) => {
        setUsers(users)
        setTotalPage(totalPage)
      })
      .catch((error) => console.error('Error:', error))
  }, [currentPage])

  return (
    <StyledUserAccessTable>
      <table>
        <thead>
          <tr>
            <th>User</th>
            <th>Teams</th>
            <th>Access</th>
            <th>Last Login</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>
                <img src={user.avatar} alt="User Avatar" />
                <div>
                  <span>{user.name}</span>
                  <span>{user.email}</span>
                </div>
              </td>
              <td>
                <span>
                  <img src={teamsIcon} alt={user.groups[0]} />
                  {user.groups[0]}
                </span>
              </td>
              <td>
                <span>On {user.access.length} products</span>
              </td>
              <td>{format(new Date(user.last_login), 'dd/MM/yyyy - HH:mm')}</td>
              <td>
                <img src={moreIcon} alt={'more'} />
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={5} className={'pagination'}>
              <div>
                <span>
                  <img src={leftArrowIcon} alt={'Previous Page'} />
                </span>
                {Array.from({ length: totalPage }, (_, index) => index + 1).map(
                  (page) => (
                    <PaginationSpan
                      key={page}
                      isActive={page === currentPage}
                      onClick={() => setCurrentPage(page)}
                    >
                      {page}
                    </PaginationSpan>
                  ),
                )}
                <span>
                  <img src={rightArrowIcon} alt={'Next Page'} />
                </span>
              </div>
            </td>
          </tr>
        </tfoot>
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

    thead {
      border: 0;
      color: var(--text-secondary);
      background-color: var(--surface-secondary);

      th {
        text-align: left;
        padding: 10px 20px;
      }
    }

    tbody {
      tr {
        border: solid 1px var(--border-primary);

        td {
          padding: 15px 20px;

          div {
            display: flex;
            flex-direction: column;

            span:first-child {
              font-weight: 500;
              font-size: 13px;
              line-height: 19px;
              color: var(--text-primary);
            }

            span {
              font-weight: 500;
              font-size: 12px;
              line-height: 18px;
              color: var(--text-third);
            }
          }
        }

        td:first-child {
          display: flex;
          flex-direction: row;
          align-items: center;

          img {
            border-radius: 50%;
            width: 32px;
            height: 32px;
            object-fit: cover;
            margin-right: 20px;
          }
        }

        td:nth-child(2) {
          span {
            display: inline-flex;
            align-items: center;

            gap: 4px;
            border: 1px solid var(--border-primary);
            border-radius: 100px;

            padding: 3px 8px;
            font-size: 11px;
            line-height: 16px;
          }
        }

        td:nth-child(3) {
          span {
            font-size: 12px;
            line-height: 18px;
            color: var(--text-secondary);
            border-bottom: 1px dashed #66708580;
          }
        }

        td:nth-child(4) {
          font-size: 11px;
          line-height: 16px;
          color: var(--text-third);
        }
      }
    }

    tfoot {
      tr {
        width: 100%;

        td {
          width: 100%;
          padding: 16px 20px;

          img {
            width: 12px;
            height: 12px;
          }

          div {
            display: flex;
            flex-direction: row;
            justify-content: center;

            span {
              display: flex;
              flex-direction: row;
              justify-content: center;
              align-items: center;
              border: 1px solid var(--border-primary);
              height: 32px;
              width: 32px;
              font-size: 11px;
              line-height: 16px;
              color: var(--text-secondary);

              &:first-of-type {
                border-radius: var(--radius-md) 0 0 var(--radius-md);
              }

              &:last-of-type {
                border-radius: 0 var(--radius-md) var(--radius-md) 0;
              }
            }
          }
        }
      }
    }
  }
`
const PaginationSpan = styled.span<{ isActive: boolean }>`
  background-color: ${(props) =>
    props.isActive ? 'var(--surface-secondary)' : 'transparent'};
  color: ${(props) => (props.isActive ? 'black' : 'var(--text-secondary)')};
`
