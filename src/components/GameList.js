import styled from "@emotion/styled";
import GameCard from "./GameCard";

const WrapperUl = styled.ul`
  padding: 0px;
`;

function GamesList({ games }) {
  return (
    <WrapperUl>
      {games.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </WrapperUl>
  );
}

export default GamesList;
