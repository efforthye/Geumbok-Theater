import styled from "styled-components";
import { Link } from "react-router-dom";

import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";

const SidebarComponent = () => {
  return (
    <SideBarContainer className="sidebar">
      <div className="sidebarInner">
        <div className="sidebarBox">
          <h3 className="sidebarTitle">Banners</h3>
          <ul className="sidebarList">
            <Link to={`/admin/`}>
              <li className="sidebarListItem">
                <HomeIcon />
                Home
              </li>
            </Link>
            <Link to={`/admin/user`}>
              <li className="sidebarListItem">
                <PersonIcon />
                Users
              </li>
            </Link>
            <Link to={`/admin/movie`}>
              <li className="sidebarListItem">
                <AccountBalanceIcon />
                CinemaRooms
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </SideBarContainer>
  );
};
export default SidebarComponent;

const SideBarContainer = styled.div`
  flex: 1;

  height: calc(100vh - 50px);
  background-color: rgba(240, 239, 239, 1);

  position: sticky;
  top: 50px;

  a {
    text-decoration: none;
    color: #555;
  }
  .sidebarInner {
    padding: 20px 40px;
  }

  .sidebarBox {
    margin-bottom: 2rem;
  }
  .sidebarTitle {
    font-size: 0.85rem;
    color: rgba(197, 197, 197, 1);
  }
  .sidebarList {
    list-style: none;
    padding: 0.5rem;
  }
  .sidebarListItem {
    padding: 5px;
    cursor: pointer;
    display: flex;
    align-items: center;
    border-radius: 10px;
    font-size: 0.75rem;
  }
  .sidebarListItem:hover {
    background-color: rgba(212, 209, 235, 1);
  }
`;
