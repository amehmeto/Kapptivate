import { KappButton } from '../design-system/components/KappButton.tsx'
import fileUp from '../assets/file-up.svg'
import plus from '../assets/plus.svg'
import styled from 'styled-components'
import searchIcon from '../assets/search.svg'
import teamsIcon from '../assets/teams.svg'

export function Header() {
  const totalUsers = 45

  return (
    <StyledHeader>
      <div className="header-top">
        <h1>Users ({totalUsers})</h1>
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
          />
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
  .header-top {
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
  }

  .header-top-right {
    display: flex;
    flex-direction: row;
    gap: 8px;
  }

  .header-bottom {
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
    }

    label {
      position: relative;
    }

    label:before {
      content: '';
      position: absolute;
      left: 12px;
      top: 50%;
      transform: translateY(-50%); // center the icon vertically
      height: 15px;
      width: 15px;

      background: url(${searchIcon}) center / contain no-repeat;
    }
  }
`