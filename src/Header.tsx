import { KappButton } from './design-system/components/KappButton.tsx'
import fileUp from './assets/file-up.svg'
import plus from './assets/plus.svg'
import styled from 'styled-components'

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
            variant={'secondary'}
          />
          <KappButton icon={plus} label={'New user'} variant={'primary'} />
        </div>
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
`
