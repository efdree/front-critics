import styled from "@emotion/styled";

const Button = styled.button`
  padding: 8px 16px;
  background: #f490b1;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #ffffff;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  border: none;
  corsor: pointer;
  font-family: "Inter";
  width: 100%;
  margin: 8px 0px 8px 0px;

  &:hover {
    background: hsla(215, 14%, 34%, 1);
  }
`;

export default Button;
