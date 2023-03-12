import { useState, useEffect } from "react";
import styled from "@emotion/styled";
import Button from "./Button";
import Input from "./Input";
import TextArea from "./TextArea";
import { Link } from "react-router-dom";
import { getGames } from "../services/games-service";

const Title = styled.h2`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  color: #17171c;
  margin: 16px 0px;
`;

const Content = styled.div`
  margin: 0px 16px;
`;

const InputFile = styled.input`
  width: 100%;
`;

const StyledLabel = styled.label`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: #303036;
`;

const Select = styled.select`
  border-radius: 6px;
  padding: 8px 12px;
  background: #ffffff;
  border: 1px solid #d3d3d3;
  box-shadow: 0px 1px 2pp rgba(0, 0, 0, 0.05);
  width: 100%;
`;

const ContentForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
const ContentLink = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const SecondaryLink = {
  padding: "8px 16px",
  background: "#F2F2F2",
  borderRadius: "4px",
  letterSpacing: "0.1em",
  textTransform: "uppercase",
  color: "#D44A78",
  fontWeight: "500",
  fontSize: "14px",
  lineHeight: "20px",
  border: "none",
  corsor: "pointer",
  fontFamily: "Inter",
  textAlign: "center",
  margin: "8px 0px 10px 0px",
};

function FormGame({
  title,
  onSubmit,
  handleChange,
  placeholderName,
  inputName,
  placeholderSummary,
  inputSummary,
  placeholderRating,
  inputRating,
  placeholderReleaseDate,
  inputReleaseDate,
  selectCategory,
  selectOption,
  selectParentId,
  onChangeFile,
  submit,
}) {
  const [games, setGames] = useState([]);
  useEffect(() => {
    getGames().then(setGames);
  }, []);

  return (
    <Content>
      <Title>{title}</Title>
      <ContentForm onSubmit={onSubmit}>
        <Input
          placeholder={placeholderName}
          label="Name"
          name="name"
          value={inputName}
          onChange={handleChange}
        />
        <TextArea
          placeholder={placeholderSummary}
          label="Summary"
          name="summary"
          value={inputSummary}
          onChange={handleChange}
        />
        <Input
          placeholder={placeholderReleaseDate}
          label="Release date"
          name="release_date"
          type="date"
          value={inputReleaseDate}
          onChange={handleChange}
        />
        <Input
          placeholder={placeholderRating}
          label="Rating"
          name="rating"
          type="number"
          value={inputRating}
          onChange={handleChange}
        />
        <div>
          <StyledLabel>category</StyledLabel>
          <Select
            name="category"
            value={selectCategory}
            onChange={handleChange}
          >
            <option key={1} value={1}>
              {"Main Game"}
            </option>
            <option key={2} value={2}>
              {"Release"}
            </option>
          </Select>
        </div>
        <div>
          <StyledLabel>parent game</StyledLabel>
          <Select
            name="parent_id"
            value={selectParentId}
            onChange={handleChange}
          >
            {selectOption}
            {games.map((game) => (
              <option key={game.id} value={game.id}>
                {game.name}
              </option>
            ))}
          </Select>
        </div>
        <div>
          <StyledLabel>Cover</StyledLabel>
          <InputFile type="file" name="cover" onChange={onChangeFile} />
        </div>
        <Button type="submit">{submit}</Button>
      </ContentForm>
      <ContentLink>
        <Link to="/" style={SecondaryLink}>
          Back
        </Link>
      </ContentLink>
    </Content>
  );
}

export default FormGame;
