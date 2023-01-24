import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@mui/icons-material";
import SHA256 from "crypto-js/sha256";
const rows = [
  {
    id: 1,
    Id: "jung9649",
    PW: SHA256("1234").toString(),
    Name: "SnowJon",
    phone: "010-2052-9649",
  },
  {
    id: 2,
    Id: "jung9649",
    PW: SHA256("1234").toString(),
    Name: "KimSunJu",
    phone: "010-2052-9649",
  },
  {
    id: 3,
    Id: "jung9649",
    PW: SHA256("1234").toString(),
    Name: "YeomYeNa",
    phone: "010-2052-9649",
  },
  {
    id: 4,
    Id: "jung9649",
    PW: SHA256("1234").toString(),
    Name: "JangJeongHyun",
    phone: "010-2052-9649",
    address: "서울시 송파구 위례동 위례포레샤인 2301-1006",
    email: "ghkdwja9649@gmail.com",
  },
  {
    id: 5,
    Id: "jung9649",
    PW: SHA256("1234").toString(),
    Name: "LeeKaWon",
    phone: "010-2052-9649",
  },
  {
    id: 6,
    Id: "jung9649",
    PW: SHA256("1234").toString(),
    Name: "ParkYeSung",
    phone: "010-2052-9649",
  },
  {
    id: 7,
    Id: "jung9649",
    PW: SHA256("1234").toString(),
    Name: "ParkHyeRim",
    phone: "010-2052-9649",
  },
];

const AdminPage = () => {
  const [del, setDel] = useState(rows);
  const deleteUser = (id) => {
    setDel(del.filter((item) => item.id !== id));
  };

  const columns = [
    // field의 value는 rows의 키값이랑 일치해야함
    { field: "id", headerName: "No", width: 50 },
    { field: "Name", headerName: "이름", width: 200 },
    { field: "Id", headerName: "ID", width: 200 },
    { field: "PW", headerName: "비밀번호", width: 100 },
    { field: "phone", headerName: "핸드폰", width: 170 },
    { field: "address", headerName: "주소", width: 200 },
    { field: "email", headerName: "이메일", width: 200 },
    {
      field: "action",
      headerName: "수정 / 삭제",
      width: 150,
      renderCell: (item) => {
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
    <AdminBox>
      <DataGrid
        rows={del}
        disableSelectionOnClick
        columns={columns}
        pageSize={5} // 테이블에 보여지는 데이터 수
        rowsPerPageOptions={[5]}
        // checkboxSelection
      />
    </AdminBox>
  );
};
export default AdminPage;

const AdminBox = styled.div`
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
