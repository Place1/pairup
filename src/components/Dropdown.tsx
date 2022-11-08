import styled from "styled-components";
import { Label, BaseLabelProps } from "./Input";

const DropdownBase = styled.select(({ theme }) => ({
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

type DropdownProps = BaseLabelProps & React.SelectHTMLAttributes<HTMLSelectElement>

export const Dropdown = (props: DropdownProps) => <Label label={props.label}>
  <DropdownBase {...props}>
    {props.children}
  </DropdownBase>
</Label>