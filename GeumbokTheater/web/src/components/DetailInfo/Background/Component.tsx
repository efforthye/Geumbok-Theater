const BackgroundComponent = () => {
  return (
    <div>
      <div className="background"></div>
      <div className="backgroundInfo">
        <div>
          <div className="firstFlex">
            <div>#돌비시네마</div>
            <div>아바타:물의 길</div>
            <div>Avatar: The Way of Water</div>
            <div>
              <button>하트</button>
              <button>공유하기</button>
            </div>
          </div>
          <div className="secondFlex">
            <div>
              <div>실관람 평점</div>
              <div>숫자</div>
            </div>
            <div>
              <div>예매율</div>
              <div>1 위 (20.%)</div>
            </div>
            <div>
              <div>누적관객수</div>
              <div>10,171,550명</div>
            </div>
          </div>
        </div>
        <div>
          <div>사진</div>
          <div>예매, Dolby</div>
        </div>
      </div>
    </div>
  );
};
export default BackgroundComponent;
