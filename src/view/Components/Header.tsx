import { KappButton } from '../../design-system/components/KappButton.tsx'
import fileUp from '../../assets/file-up.svg'
import plus from '../../assets/plus.svg'
import styled from 'styled-components'
import searchIcon from '../../assets/search.svg'
import teamsIcon from '../../assets/teams.svg'
import React, { useContext, useEffect } from 'react'
import { userRepository } from '../dependencies.ts'
import { UserContext } from '../UserContext/UserContext.tsx'
import clearSearchIcon from '../../assets/delete-search.svg'
import { filterUsersBy } from '../../core/use-cases/FilterUsersBy.ts'

export function Header() {
  const { userStoreValues, setUserStore } = useContext(UserContext)

  const { currentPage, users, searchKeyword } = userStoreValues

  useEffect(() => {
    userRepository
      .getUsersPage(currentPage, 15)
      .then(filterUsersBy(searchKeyword))
      .then(({ users, totalPage }) => {
        setUserStore((prevState) => {
          return {
            ...prevState,
            userStoreValues: {
              users,
              currentPage,
              totalUsers: prevState.userStoreValues.totalUsers,
              totalPage: totalPage,
              searchKeyword,
            },
          }
        })
      })
      .catch((error) => console.error('Error:', error))
  }, [currentPage, searchKeyword])

  function updateKeyword() {
    return (e: React.ChangeEvent<HTMLInputElement>) => {
      console.log(e.target.value)

      setUserStore((prevState) => {
        return {
          ...prevState,
          userStoreValues: {
            ...prevState.userStoreValues,
            searchKeyword: e.target.value,
          },
        }
      })
    }
  }

  function clearSearch() {
    setUserStore((prevState) => {
      return {
        ...prevState,
        userStoreValues: {
          ...prevState.userStoreValues,
          searchKeyword: '',
        },
      }
    })
  }

  return (
    <StyledHeader>
      <div>
        <h1>Users ({users.length})</h1>
        <div className="header-top-right">
          <KappButton
            icon={fileUp}
            label={'Export .CSV'}
            $variant={'secondary'}
          />
          <KappButton icon={plus} label={'New user'} $variant={'primary'} />
        </div>
      </div>
      <div className="header-bottom">
        <label>
          <input
            type={'text'}
            placeholder={'Search...'}
            data-icon={`url(${searchIcon})`}
            onChange={updateKeyword()}
            value={searchKeyword}
          />
          <button onClick={clearSearch}>
            <img src={clearSearchIcon} alt={'Clear search'} />
          </button>
          <span hidden={true}>Search</span>
        </label>
        <KappButton
          icon={teamsIcon}
          label={'Teams'}
          $variant={'secondary'}
          type={'dropdown'}
        />
      </div>
    </StyledHeader>
  )
}

const StyledHeader = styled.div`
  div:first-child {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 32px;

    h1 {
      margin: 0;
      padding: 0;
      color: var(--text-primary);

      height: 31px;
      overflow: hidden;
      line-height: 31px;
    }

    div {
      display: flex;
      flex-direction: row;
      gap: 8px;
    }
  }

  div:last-child {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;
    margin-top: 16px;
    height: 32px;

    input {
      padding: 7px 12px 7px 30px;
      border: 1px solid var(--border-primary);
      border-radius: var(--radius-md);
      width: 200px;
      height: 32px;
      background-color: white;
      box-sizing: border-box;
      color: var(--text-primary);
    }

    label {
      position: relative;

      button {
        position: absolute;
        right: 10px;
        top: 50%;
        transform: translateY(-50%);
        background-color: transparent;
        border: none;
        cursor: pointer;
      }

      &:active,
      &:focus {
        transform: translateY(-50%) scale(0.9);
        border: none;
        background-color: transparent;
      }
    }

    label:before {
      content: '';
      position: absolute;
      left: 12px;
      top: 50%;
      transform: translateY(-50%);
      height: 15px;
      width: 15px;

      background: url(${searchIcon}) center / contain no-repeat;
    }
  }
`
