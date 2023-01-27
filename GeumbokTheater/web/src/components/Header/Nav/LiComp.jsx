import { useState } from "react";
import styled from "styled-components";

const ListComp = ({ name, ticketList }) => {
  const [dropdown, setDropdown] = useState(false);

  return (
    <ListBox
      onMouseOver={() => {
        setDropdown(true);
      }}
      onMouseOut={() => {
        setDropdown(false);
      }}
    >
      {name}
      {!dropdown || (
        <div className="dropdown1" onMouseOver={() => {}}>
          <ul>
            {ticketList.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </ListBox>
  );
};
export default ListComp;

const ListBox = styled.li`
  .dropdown1 > ul {
    display: inline-flex;
  }
  .dropdown1 > ul li {
    margin-left: 10px;
  }
`;
