import styled from "styled-components";

const LabelBase = styled.label(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
  fontFamily: theme.fontFamily,
  fontSize: theme.fontSize,
  fontWeight: theme.fontWeight.semibold,
  lineHeight: theme.lineHeight,
  color: theme.textColor.secondary
}));

export const InputBase = styled.input(({ theme }) => ({
  backgroundColor: theme.brandColor.primary,
  borderRadius: 3,
  borderColor: theme.brandColor.secondary,
  padding: '12px',
  fontFamily: theme.fontFamily,
  fontSize: theme.fontSize,
  fontWeight: theme.fontWeight.semibold,
  lineHeight: theme.lineHeight,
  color: theme.textColor.primary
}));

type InputProps = {
  label: string;
} & React.HTMLAttributes<HTMLInputElement>

export const Input = (props: InputProps) => <LabelBase>
  {props.label}
  <InputBase {...props} type="text" />
</LabelBase>