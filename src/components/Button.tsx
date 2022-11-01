import styled from "styled-components";


type ButtonProps = {
  variant: 'primary' | 'secondary';
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;


const ButtonBase = styled.button<ButtonProps>(({ theme, variant }) => ({
  fontFamily: theme.fontFamily,
  fontSize: theme.fontSize,
  fontWeight: theme.fontWeight.semibold,
  lineHeight: theme.lineHeight,
  color: variant === 'primary' ? theme.textColor.secondary : theme.textColor.primary,
  borderRadius: 6,
  border: variant === 'primary' ? 'none' : '2px solid',
  borderColor: theme.brandColor.secondary,
  backgroundColor: variant === 'primary' ? theme.brandColor.secondary : theme.brandColor.primary,
  padding: '14px',
  cursor: 'pointer'
}))


export const Button = (props: ButtonProps) => <ButtonBase {...props}>{props.children}</ButtonBase>