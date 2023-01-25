import styled from "styled-components";
import { useParams } from "react-router-dom";

import SidebarContainer from "./Sidebar/Container";
import InfoPage from "../Pages/InfoPage";
import TicketPage from "../Pages/TicketPage";

const MyPageComponent = () => {
  const route = useParams();
  return (
    <Container>
      <div className="container">
        <SidebarContainer />
        {route.sub === `info` ? (
          <InfoPage />
        ) : route.sub === "ticket" ? (
          <TicketPage />
        ) : (
          <></>
        )}
      </div>
    </Container>
  );
};
export default MyPageComponent;

const Container = styled.div`
  & .container {
    display: flex;
  }
`;
