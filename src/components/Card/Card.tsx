import { useNavigate } from "react-router-dom";

import { AnimeDataNormalized } from "../../models/anime/anime-list/normalized";
import Star from "../Star";
import { cardCx, imgCx, ratingContainerCx } from "./styles";

type CardProps = AnimeDataNormalized;

const Card = (props: CardProps) => {
  const { id, image, rating, titleEn, titleJp } = props;
  const navigate = useNavigate();
  return (
    <div css={cardCx} onClick={() => navigate(id)}>
      <img src={image} alt="" css={imgCx} />
      <div>
        <div>{titleEn}</div>
        <div>{titleJp}</div>
        <div css={ratingContainerCx}>
          <Star />
          <div>{rating}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
