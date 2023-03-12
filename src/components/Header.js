import styled from "@emotion/styled";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

import NavBar from "./NavBar";

const ContainHeader = styled.div`
  background: #f2f2f2;
  padding: 8px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
`;
const Brand = styled.img`
  width: 150px;
  height: 48px;
`;

function Header() {
  return (
    <ContainHeader>
      <Link to="/">
        <Brand src={logo} alt="logo" />
      </Link>
      <NavBar />
    </ContainHeader>
  );
}

export default Header;
