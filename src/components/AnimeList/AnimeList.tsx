import { Fragment } from "react";
import { useGetAnimeList } from "../../repositories/anime/anime-list/use-get-anime-list";

import Header from "../Header";
import Card from "../Card/Card";
import Spinner from "../Spinner";
import InfiniteScroll from "../InfiniteScroll";

import { titleCx } from "./style";

const AnimeList = () => {
  const { data, isLoading, isFetching, error, hasNextPage, fetchNextPage } =
    useGetAnimeList();

  if (isLoading)
    return (
      <>
        <Header />
        <Spinner />
      </>
    );

  if (error) return <p>Terjadi kesalahan: {error.message}</p>;

  return (
    <div>
      <Header />
      <h1 css={titleCx}>Daftar Anime</h1>
      {data?.pages.map((page, pageIndex) => (
        <Fragment key={pageIndex}>
          {page.list.map((anime) => (
            <Card
              key={anime.id}
              id={anime.id}
              image={anime.image}
              rating={anime.rating}
              titleEn={anime.titleEn}
              titleJp={anime.titleJp}
            />
          ))}
        </Fragment>
      ))}
      {isFetching && <Spinner />}
      {!isFetching && (
        <InfiniteScroll
          loadMore={fetchNextPage}
          hasMore={hasNextPage}
          threshold={500}
        />
      )}
    </div>
  );
};

export default AnimeList;
