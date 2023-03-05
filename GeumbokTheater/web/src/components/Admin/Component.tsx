import styled from "styled-components";
import { useParams } from "react-router-dom";

import AdminPage from "../Pages/AdminPage";
import MoviePage from "../Pages/MoviePage";
import SidebarContainer from "./Sidebar/Container";

const AdminComponent = () => {
  const route = useParams();
  return (
    <Container>
      <div className="container">
        <SidebarContainer />
        {route.sub === `user` ? (
          <AdminPage />
        ) : route.sub === "movie" ? (
          <MoviePage />
        ) : (
          <></>
        )}
      </div>
    </Container>
  );
};
export default AdminComponent;

const Container = styled.div`
  & .container {
    display: flex;
  }
`;
