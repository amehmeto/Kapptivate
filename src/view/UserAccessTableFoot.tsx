import styled from 'styled-components'
import { useContext } from 'react'
import leftArrowIcon from '../assets/arrow-left.svg'
import rightArrowIcon from '../assets/arrow-right.svg'
import { UserContext } from './UserContext.tsx'

export function UserAccessTableFoot() {
  const userStore = useContext(UserContext)

  const {
    userStoreValues: { currentPage, totalPage },
    setUserStore,
  } = userStore

  function updateCurrentPage(page: number) {
    if (page < 1 || page > totalPage) return

    return () => {
      setUserStore((prevState) => {
        return {
          ...prevState,
          userStoreValues: {
            ...prevState.userStoreValues,
            currentPage: page,
          },
        }
      })
    }
  }

  return (
    <StyledUserAccessTableFoot>
      <tr>
        <td colSpan={5}>
          <div>
            <span onClick={updateCurrentPage(currentPage - 1)}>
              <img src={leftArrowIcon} alt={'Previous Page'} />
            </span>
            {Array.from({ length: totalPage }, (_, index) => index + 1).map(
              (page) => (
                <StyledPaginationSpan
                  key={page}
                  $isActive={page === currentPage}
                  onClick={updateCurrentPage(page)}
                >
                  {page}
                </StyledPaginationSpan>
              ),
            )}
            <span onClick={updateCurrentPage(currentPage + 1)}>
              <img src={rightArrowIcon} alt={'Next Page'} />
            </span>
          </div>
        </td>
      </tr>
    </StyledUserAccessTableFoot>
  )
}

const StyledUserAccessTableFoot = styled.tfoot`
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
          cursor: pointer;

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
`
const StyledPaginationSpan = styled.span<{ $isActive: boolean }>`
  background-color: ${(props) =>
    props.$isActive ? 'var(--surface-secondary)' : 'transparent'};
  color: ${(props) => (props.$isActive ? 'black' : 'var(--text-secondary)')};
  font-weight: ${(props) => (props.$isActive ? 'bold' : 'regular')};
`
