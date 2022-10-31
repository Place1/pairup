import styled from "styled-components";

const stackSizeMap = {
  small: '8px',
  medium: '16px',
  large: '32px',
  xlarge: '40px',
}

export const StackBase = styled.div<StackProps>(({ size }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: stackSizeMap[size]
}))

type StackProps = {
  size: keyof typeof stackSizeMap,
  children: React.ReactNode
}

export const Stack = (props: StackProps) => <StackBase size={props.size}>
  {props.children}
</StackBase>