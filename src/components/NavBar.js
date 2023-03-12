import styled from "@emotion/styled";
import { HiMenu } from "react-icons/hi";
const ContainNavBar = styled.div`
  background: #f2f2f2;
  padding: 8px 0px;
  display: flex;
  align-items: center;
  gap: 16px;
`;

function NavBar() {
  return (
    <ContainNavBar>
      <HiMenu />
    </ContainNavBar>
  );
}

export default NavBar;
