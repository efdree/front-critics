import styled from "@emotion/styled";
import { ImLinkedin } from "react-icons/im";
const ContainFooter = styled.div`
  background: #f2f2f2;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

function Footer() {
  return (
    <ContainFooter>
      <p>© 2021 - Codeable Critics</p>
      <p>Build with ♥ by</p>
      <p>
        <ImLinkedin /> Student Name
      </p>
    </ContainFooter>
  );
}

export default Footer;
