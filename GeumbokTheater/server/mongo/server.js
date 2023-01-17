// 참고 링크 : https://javafa.gitbooks.io/nodejs_server_basic/content/chapter12.html
// 1. mongoose 모듈 가져오기
import mongoose from "mongoose";

// 2. DB 세팅
mongoose.connect("mongodb://localhost:27017/GeumbokTheater");

// 3. 연결된 DB 사용
let db = mongoose.connection;

// 4. 연결 실패
db.on("error", function () {
  console.log("Connection Failed!");
});

// 5. 연결 성공
db.once("open", function () {
  console.log("Connected!");
});

// 6. Schema 생성. (혹시 스키마에 대한 개념이 없다면, 입력될 데이터의 타입이 정의된 DB 설계도 라고 생각하면 됩니다.)
let testSchema = mongoose.Schema({
  name: "string",
  address: "string",
  age: "number",
});

// 7. 정의된 스키마를 객체처럼 사용할 수 있도록 model() 함수로 컴파일
let TestSchema = mongoose.model("Schema", testSchema);

// 8. TestSchema 객체를 new 로 생성해서 값을 입력
var newTestSchema = new TestSchema({
  name: "박혜림",
  address: "서울특별시 강동구 천호대로 995, 금복빌딩 4층 6강의실",
  age: "23",
});

// 9. 데이터 저장(입력)
newTestSchema.save(function (error, data) {
  if (error) {
    console.log(error);
  } else {
    console.log("Saved!");
  }
});

// 10. TestSchema 레퍼런스 전체 데이터 가져오기
// TestSchema.find(function(error, members){
//     console.log('--- Read all ---');
//     if(error){
//         console.log(error);
//     }else{
//         console.log(members);
//     }
// });

// 11. 특정 아이디값 가져오기
// TestSchema.findOne({_id:'585b777f7e2315063457e4ac'}, function(error, member){
//     console.log('--- Read one ---');
//     if(error){
//         console.log(error);
//     }else{
//         console.log(member);
//     }
// });

// 12. 특정아이디 수정하기
// TestSchema.findById({_id:'585b777f7e2315063457e4ac'}, function(error, member){
//     console.log('--- Update(PUT) ---');
//     if(error){
//         console.log(error);
//     }else{
//         member.name = '--modified--';
//         member.save(function(error,modified_member){
//             if(error){
//                 console.log(error);
//             }else{
//                 console.log(modified_member);
//             }
//         });
//     }
// });

// 13. 삭제
// TestSchema.remove({_id:'585b7c4371110029b0f584a2'}, function(error, output){
//     console.log('--- Delete ---');
//     if(error){
//         console.log(error);
//     }

//     /* ( SINCE DELETE OPERATION IS IDEMPOTENT, NO NEED TO SPECIFY )
//         어떤 과정을 반복적으로 수행 하여도 결과가 동일하다. 삭제한 데이터를 다시 삭제하더라도, 존재하지 않는 데이터를 제거요청 하더라도 오류가 아니기 때문에
//         이부분에 대한 처리는 필요없다. 그냥 삭제 된것으로 처리
//         */
//     console.log('--- deleted ---');
// });
