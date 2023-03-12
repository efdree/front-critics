import { useEffect, useState } from "react";
import { getGames } from "../services/games-service";
import GameList from "../components/GameList";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const Content = styled.div`
  margin: 0px 16px;
`;

const Title = styled.h2`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  color: #17171c;
  margin: 16px 0px;
`;

const PrimaryLink = {
  padding: "6px 10px",
  background: "#F490B1",
  boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.05)",
  borderRadius: "4px",
  letterSpacing: "0.1em",
  textTransform: "uppercase",
  color: "#ffffff",
  fontWeight: "500",
  fontSize: "12px",
  lineHeight: "16px",
  border: "none",
  corsor: "pointer",
  fontFamily: "Inter",
};

function HomePage() {
  const [games, setGames] = useState([]);
  useEffect(() => {
    getGames().then(setGames);
  }, []);

  return (
    <Content>
      <Title>Games</Title>
      <Link to="/newGame" style={PrimaryLink}>
        New Game
      </Link>
      <GameList games={games} />
    </Content>
  );
}

export default HomePage;
