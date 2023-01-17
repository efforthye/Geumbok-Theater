import axios from "axios";

function App() {
  return (
    <div className="App">
      <button
        onClick={() => {
          axios.post("/api/boxOffice/test", {
            member: [
              "박혜림",
              "염예나",
              "김선주",
              "장정현",
              "이가원",
              "박예성",
            ],
          });
        }}
      >
        테스트
      </button>
    </div>
  );
}

export default App;
