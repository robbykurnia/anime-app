import { useParams } from "react-router-dom";
import { useGetAnimeDetail } from "../../repositories/anime/anime-detail/use-get-anime-detail";

import Star from "../Star";
import Header from "../Header";
import Spinner from "../Spinner";

import {
  counterCx,
  descCx,
  detailCx,
  imgCx,
  ratingContainerCx,
  ratingCx,
  titleContainerCx,
} from "./styles";

const AnimeDetail = () => {
  const { id = "" } = useParams<{ id: string }>();
  const { data, isLoading, error } = useGetAnimeDetail(id);

  if (isLoading)
    return (
      <>
        <Header back />
        <Spinner />
      </>
    );

  if (error) return <p>Terjadi kesalahan: {error.message}</p>;

  return (
    <div>
      <Header back />

      <div css={titleContainerCx}>
        <h1>{data.titleEn}</h1>
        <h2>{data.titleJp}</h2>
      </div>
      <div css={detailCx}>
        <img css={imgCx} src={data.image} alt={"poster"} />
        <div>
          <div css={ratingContainerCx}>
            <Star />
            <div>
              <span css={ratingCx}>{data.rating}</span>
              <span css={counterCx}>({data.userCount} users)</span>
            </div>
          </div>
          <div>Ranked #{data.ranked}</div>
          <div>{data.showType}</div>
        </div>
      </div>
      <p css={descCx}>{data.synopsis}</p>
    </div>
  );
};

export default AnimeDetail;
