import styled, { css } from 'styled-components'
import arrowDownIcon from '../../assets/arrow-down.svg'

type KappButtonProps = {
  icon: string
  label: string
  $variant: 'primary' | 'secondary'
  type?: string
}

export function KappButton(props: Readonly<KappButtonProps>) {
  return (
    <StyledButton $variant={props.$variant}>
      <img src={props.icon} alt="file up icon" />
      <span>{props.label}</span>
      {props.type === 'dropdown' && <img src={arrowDownIcon} alt="Dropdown" />}
    </StyledButton>
  )
}

const StyledButton = styled.button<Pick<KappButtonProps, '$variant'>>`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 6px 16px;
  border-radius: var(--radius-md);
  height: 32px;

  span {
    font-weight: 500;
  }

  img {
    height: 12px;
    margin-right: 8px;
  }

  img:last-child {
    margin: 0 0 0 16px;
  }

  ${(props) =>
    props.$variant === 'primary' &&
    css`
      background-color: var(--color-secondary);
      span {
        color: white;
      }
    `}

  ${(props) =>
    props.$variant === 'secondary' &&
    css`
      background-color: white;
      span {
        color: var(--text-primary);
      }
      border: 1px solid var(--border-primary);
    `}
`
