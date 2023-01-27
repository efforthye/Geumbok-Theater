import styled from "styled-components";

const ClientComp = () => {
  return (
    <ClientBox className="ClientBox">
      <ul>
        <li>고객센터</li>
        <li>단체관람/대관문의</li>
        <li>로그인</li>
      </ul>
    </ClientBox>
  );
};

export default ClientComp;

const ClientBox = styled.div`
  width: 100%;
  position: absolute;
  top: 4%;
  font-size: 12px;
  display: flex;
  justify-content: center;
  margin: auto;
  ul {
    width: 60%;
    display: flex;
    justify-content: flex-end;
    padding: 0;
  }
  ul > li {
    display: flex;
    justify-content: center;
    margin: 0 10px;
    color: rgb(229, 229, 229);
    cursor: pointer;
  }
`;
