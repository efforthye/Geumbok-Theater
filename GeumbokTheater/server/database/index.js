import mongoose from "mongoose";

// 컬렉션(==테이블)은 import 하기만 해도 생성됨
import Test from "./test.js";
import Test2 from "./test2.js";

// 기본 요청 url : mongodb://localhost:27017/test
const dbUrl =
  "mongodb://" +
  "localhost" + // host
  ":27017" + // port
  "/GeumbokTheater"; // 생성할 database명

// 몽구스 연결 함수
const connect = () => {
  // 만일 배포용이 아니라면, 디버깅 on
  if (process.env.NODE_ENV !== "production") {
    mongoose.set("debug", true); // 몽고 쿼리가 콘솔에서 뜨게 한다.
  }

  mongoose
    .connect(dbUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("몽고디비 연결 성공");
    });
};

// module.exports = connect;
export default connect;
