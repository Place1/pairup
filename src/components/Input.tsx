import styled from "styled-components";

export const Input = styled.input(({ theme }) => ({
  backgroundColor: theme.brandColor.primary,
  borderRadius: 3,
  borderColor: theme.brandColor.secondary,
  padding: '14px',
  fontFamily: theme.fontFamily,
  fontSize: theme.fontSize,
  lineHeight: theme.lineHeight,
  color: theme.textColor.primary
}))