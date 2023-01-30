const StatisticsComponent = () => {
  return (
    <>
      <div className="statisticsBox">
        <div>
          <div>관람포인트</div>
          <div className="dataStat">영상미 연출</div>
          <div>그래프</div>
        </div>
        <div>
          <div>실관람 평점</div>
          <div className="movieGrade">9.4</div>
          <div>예매율</div>
          <div className="dataStat">17.8%</div>
        </div>
        <div>
          <div>누적 관객수</div>
          <div className="dataStat">10,286,936</div>
          <div>그래프</div>
        </div>
      </div>
    </>
  );
};
export default StatisticsComponent;
