import { Link } from "react-router-dom";
import styled from "styled-components";
import { Stack } from "../components/Stack";

export const PageLayoutBase = styled.div(() => ({
  padding: '24px',
}))

type PageLayoutProps = {
  children: React.ReactNode;
}

export const PageLayout = (props: PageLayoutProps) => <PageLayoutBase>
  <Stack size="medium">
    <header>
      <Link to="/">
        <img src="/pairup.svg" style={{ width: '90px' }} alt="PairUp" />
      </Link>
    </header>
    {props.children}
  </Stack>
</PageLayoutBase>