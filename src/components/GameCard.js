import styled from "@emotion/styled";
import { FiEdit2 } from "react-icons/fi";
import { HiOutlineTrash } from "react-icons/hi";
import { Link } from "react-router-dom";
import { deleteGame } from "../services/games-service";

const WrapperLi = styled.li`
  display: flex;
  max-width: 328px;
  margin: 16px 0px;
  background-color: white;
`;
const ContImage = styled.div`
  display: flex;
  justify-content: center;
`;

const Image = styled.img`
  max-width: 328px;
  max-height: 150px;
`;

const ContBaseInfo = styled.div`
  padding: 0px 8px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ContHeader = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

const ContTitle = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
`;

const GameName = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 28px;
  margin-top: 2px;
`;

const GameRate = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  background-color: #757575;
  color: white;
  padding: 4px;
  border-radius: 4px;
  margin-top: 8px;
`;

const GameReleaseDate = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: #7a7a7a;
`;

const ContBody = styled.div`
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
`;

const CriticsCount = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #7a7a7a;
`;

const ContLinks = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 8px;
  text-align: center;
`;

const ActionLink = {
  borderRadius: "50px",
  width: "28px",
  height: "28px",
  color: "#7A7A7A",
  padding: "4px",
};

function GameCard({ id, game }) {
  function handleClick(event) {
    event.preventDefault();
    deleteGame(game.id);
    window.location.reload(false);
  }

  return (
    <WrapperLi key={id}>
      <ContImage>
        <Link to={"/showGame/" + game.id}>
          <Image src={game.cover} alt={game.id} />
        </Link>
      </ContImage>
      <ContBaseInfo>
        <ContHeader>
          <ContTitle>
            <GameName>{game.name}</GameName>
            <div>
              <GameRate>{game.rating.toFixed(1)}</GameRate>
            </div>
          </ContTitle>
          <GameReleaseDate>{game.release_date.slice(0, 4)}</GameReleaseDate>
        </ContHeader>
        <ContBody>{game.summary.slice(0, 62)}...</ContBody>
        <ContLinks>
          <CriticsCount>{game.employee_count} Critics</CriticsCount>
          <div>
            <Link to={"/editGame/" + game.id} style={ActionLink}>
              <FiEdit2 />
            </Link>
            <Link to="/" style={ActionLink} onClick={handleClick}>
              <HiOutlineTrash />
            </Link>
          </div>
        </ContLinks>
      </ContBaseInfo>
    </WrapperLi>
  );
}

export default GameCard;
