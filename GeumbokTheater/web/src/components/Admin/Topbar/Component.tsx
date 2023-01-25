import styled from "styled-components";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import PublicIcon from "@mui/icons-material/Public";
import SettingsBrightnessIcon from "@mui/icons-material/SettingsBrightness";

const TopBarComponent = () => {
  return (
    <TopBar className="topbar">
      <TopBarWrapper className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Admin</span>
        </div>
        <div className="topRight">
          <div className="alretContainer">
            <NotificationsNoneIcon />
            {/* <span className="alretNum">2</span> */}
          </div>
          <div className="alretContainer">
            <PublicIcon />
            {/* <span className="alretNum">2</span> */}
          </div>
          <div className="alretContainer">
            <SettingsBrightnessIcon />
          </div>
        </div>
      </TopBarWrapper>
    </TopBar>
  );
};
export default TopBarComponent;

const TopBar = styled.div`
  width: 100%;
  height: 50px;
  background-color: rgba(255, 255, 255, 1);

  position: sticky;
  top: 0;
  z-index: 999;
`;
const TopBarWrapper = styled.div`
  height: 100%;
  padding: 5px 20px;
  display: flex;
  justify-content: space-between;
  aligin-items: center;
  & .logo {
    font-weight: bold;
    font-size: 30px;
    color: darkblue;
    cursor: pointer;
  }
  & .topRight {
    display: flex;
    align-items: center;
  }
  & .alretContainer {
    position: relative;
    margin-right: 15px;
    color: #555;
    & .alretNum {
      position: absolute;
      top: -5px;
      right: 5px;

      background-color: red;
      border-radius: 50%;
      height: 15px;
      width: 15px;

      display: flex;
      align-items: center;
      justify-content: center;

      font-size: 0.7rem;
      color: white;
    }
  }
  & .topAvatar {
    height: 40px;
    width: 40px;
    border-radius: 50%;
    cursor: pointer;
  }
`;
