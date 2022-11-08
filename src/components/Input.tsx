import styled from "styled-components";

const LabelBase = styled.label(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
  fontFamily: theme.fontFamily,
  fontSize: theme.fontSize,
  fontWeight: theme.fontWeight.semibold,
  lineHeight: theme.lineHeight,
  color: theme.textColor.tertiary
}));

const InputBase = styled.input(({ theme }) => ({
  backgroundColor: theme.brandColor.primary,
  borderRadius: 6,
  borderColor: theme.brandColor.secondary,
  borderWidth: '2px',
  padding: '12px',
  fontFamily: theme.fontFamily,
  fontSize: theme.fontSize,
  fontWeight: theme.fontWeight.semibold,
  lineHeight: theme.lineHeight,
  color: theme.textColor.primary
}));

export type BaseLabelProps = {
  label: string;
}

export type LabelProps = {
  children?: React.ReactNode;
} & BaseLabelProps;

export const Label = (props: LabelProps) => <LabelBase>
  {props.label}
  {props.children}
</LabelBase>

type InputProps = BaseLabelProps & React.HTMLAttributes<HTMLInputElement>

export const Input = (props: InputProps) => <Label label={props.label}>
  <InputBase {...props} type="text" />
</Label>