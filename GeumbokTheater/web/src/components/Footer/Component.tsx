import { Dispatch, SetStateAction } from "react";
import styled from "styled-components";

const MainFooterComponent = () => {
  return (
    <FooterBox>
      <LogoBox>
        <div>금복</div>
        <img src="/imgs/2-r.png" alt=""></img>
        <div>극장</div>
      </LogoBox>
      <MenuBox>
        <div>이용약관</div>
        <div>개인정보처리방침</div>
        <div>이메일무단수집거부</div>
        <div>영상정보처리기기 운영 및 관리방침</div>
        <div>G.POINT회원안내</div>
        <div>배정기준</div>
        <div>채용안내</div>
        <div>광고/임대문의</div>
        <div>기업정보</div>
        <div>사회적책임</div>
      </MenuBox>
      <InfoBox>
        <div>서울특별시 강동구 651 올림픽로 금복빌딩 4층</div>
        <div>고객센터 02-479-4050</div>
      </InfoBox>
      <InfoBox>
        <div>대표이사 박혜림</div>
        <div>사업자등록번호 000-00-00000</div>
        <div>통신판매업신고번호 제0000호</div>
        <div>개인정보 보호 책임자 염예나</div>
      </InfoBox>
      <InfoBox>
        <div>COPYRIGHT© GEUMBOK THEATER ALL RIGHT RESERVED.</div>
      </InfoBox>
    </FooterBox>
  );
};

export default MainFooterComponent;

const FooterBox = styled.div`
  width: 1200px;
  margin: 0 auto;
`;

const LogoBox = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 50px;
  }
`;

const MenuBox = styled.div`
  display: flex;
  font-size: 14px;

  div {
    border-right: 1px solid black;
    padding: 0 10px;

    &:first-child {
      padding-left: 0;
    }
    &:last-child {
      border-right: none;
    }
  }
`;

const InfoBox = styled.div`
  display: flex;
  font-size: 14px;
  color: #585b58;

  div {
    border-right: 1px solid #585b58;
    padding: 0 10px;

    &:first-child {
      padding-left: 0;
    }

    &:last-child {
      border-right: none;
    }
  }
`;
