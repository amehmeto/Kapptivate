import styled, { css } from 'styled-components'

type KappButtonProps = {
  icon: string
  label: string
  variant: 'primary' | 'secondary'
}

export function KappButton(props: Readonly<KappButtonProps>) {
  return (
    <StyledButton variant={props.variant}>
      <img src={props.icon} alt="file up icon" />
      <span>{props.label}</span>
    </StyledButton>
  )
}

const StyledButton = styled.button<Pick<KappButtonProps, 'variant'>>`
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

  ${(props) =>
    props.variant === 'primary' &&
    css`
      background-color: var(--color-secondary);
      span {
        color: white;
      }
    `}

  ${(props) =>
    props.variant === 'secondary' &&
    css`
      background-color: white;
      span {
        color: var(--text-primary);
      }
      border: 1px solid var(--border-primary);
    `}
`
