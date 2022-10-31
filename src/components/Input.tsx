import styled from "styled-components";

export const Input = styled.input(props => ({
  borderRadius: 3,
  borderColor: props.theme.brandColor.secondary,
  padding: '14px',
  fontFamily: props.theme.fontFamily,
  color: props.theme.textColor.primary
}))