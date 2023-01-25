import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@mui/icons-material";

const rows = [
  {
    id: 1,
    theaterNum: "1관",
    MovieList: "3",
    SeatBlock: "29/100",
    genre: "액션",
  },
  {
    id: 2,
    theaterNum: "2관",
    MovieList: "4",
    SeatBlock: "24/100",
    genre: "멜로",
  },
  {
    id: 3,
    theaterNum: "3관",
    MovieList: "5",
    SeatBlock: "32/100",
    genre: "코믹",
  },
  {
    id: 4,
    theaterNum: "4관",
    MovieList: "2",
    SeatBlock: "98/100",
    genre: "범죄",
  },
  {
    id: 5,
    theaterNum: "5관",
    MovieList: "5",
    SeatBlock: "55/100",
    genre: "사극",
  },
  {
    id: 6,
    theaterNum: "6관",
    MovieList: "3",
    SeatBlock: "1/100",
    genre: "추리",
  },
  {
    id: 7,
    theaterNum: "7관",
    MovieList: "6",
    SeatBlock: "12/100",
    genre: "모험",
  },
];

const MoviePage = () => {
  const [del, setDel] = useState(rows);
  const deleteUser = (id: number) => {
    setDel(del.filter((item) => item.id !== id));
  };

  const columns = [
    // field의 value는 rows의 키값이랑 일치해야함
    { field: "id", headerName: "No", width: 100 },
    { field: "theaterNum", headerName: "극장번호", width: 150 },
    { field: "MovieList", headerName: "상영영화목록", width: 150 },
    { field: "SeatBlock", headerName: "극장좌석현황", width: 150 },
    { field: "genre", headerName: "장르", width: 100 },
    {
      field: "action",
      headerName: "수정 / 삭제",
      width: 150,
      renderCell: (item: { row: { id: number } }) => {
        return (
          <>
            <Link to={`/admin/edit/${item.row.id}`}>
              <button className="edit">Edit</button>
            </Link>
            <DeleteOutline
              className="delete"
              onClick={() => {
                deleteUser(item.row.id);
              }}
            />
          </>
        );
      },
    },
  ];

  return (
    <MovieBox>
      <DataGrid
        rows={del}
        disableSelectionOnClick
        columns={columns}
        pageSize={5} // 테이블에 보여지는 데이터 수
        rowsPerPageOptions={[5]}
        // checkboxSelection
      />
    </MovieBox>
  );
};
export default MoviePage;

const MovieBox = styled.div`
  flex: 4;
  padding: 0 20px;

  .edit {
    border: none;
    border-radius: 10px;
    padding: 5px 10px;
    background-color: #3bb077;
    color: white;
    cursor: pointer;
    margin-right: 15px;
  }
  .delete {
    color: red;
    cursor: pointer;
  }
`;
