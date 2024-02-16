import styled from 'styled-components'
import { User } from '../../core/models/User.ts'
import teamsIcon from '../../assets/teams.svg'
import moreIcon from '../../assets/more-horizontal.svg'
import { formatDate } from '../../core/use-cases/FormatDate.ts'

export function UserAccessTableRow(props: Readonly<{ user: User }>) {
  const devicesWithAccess = props.user.access
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' & ')

  return (
    <StyledUserAccessTableRow>
      <td>
        <img src={props.user.avatar} alt="User Avatar" />
        <div>
          <span>{props.user.name}</span>
          <span>{props.user.email}</span>
        </div>
      </td>
      <td>
        <span>
          <img src={teamsIcon} alt={props.user.groups[0]} />
          {props.user.groups[0]}
        </span>
      </td>
      <td>
        <span>
          On {props.user.access.length} products
          <div>{devicesWithAccess}</div>
        </span>
      </td>
      <td>{formatDate(props.user.last_login)}</td>
      <td>
        <img src={moreIcon} alt={'more'} />
      </td>
    </StyledUserAccessTableRow>
  )
}

const StyledUserAccessTableRow = styled.tr`
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
      position: relative;
      font-size: 12px;
      line-height: 18px;
      color: var(--text-secondary);
      border-bottom: 1px dashed #66708580;

      div {
        display: none;
        position: absolute;
      }

      &:hover div {
        display: block;
        background-color: var(--color-main);
        color: white;
        border: 1px solid var(--border-primary);
        border-radius: var(--radius-md);
        padding: 8px;
        top: -50px;
        left: 50%;
        transform: translateX(-50%);
        white-space: nowrap;
        z-index: 1;

        &::after {
          content: '';
          position: absolute;
          bottom: -10px; // Position the arrow at the bottom of the div
          left: 50%;
          transform: translateX(-50%);
          width: 0;
          height: 0;
          border-left: 10px solid transparent; // These create
          border-right: 10px solid transparent; // an arrow shape
          border-top: 10px solid var(--color-main); // This decides the color
        }
      }
    }
  }

  td:nth-child(4) {
    font-size: 11px;
    line-height: 16px;
    color: var(--text-third);
  }
`
