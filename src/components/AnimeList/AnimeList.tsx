import { Fragment } from "react";
import { useGetAnimeList } from "../../repositories/anime/anime-list/use-get-anime-list";
import Header from "../Header";
import { titleCx } from "./style";
import InfiniteScroll from "../InfiniteScroll";
import Card from "../Card/Card";

const AnimeList = () => {
  const { data, isLoading, error, fetchNextPage, hasNextPage } =
    useGetAnimeList();

  if (isLoading)
    return (
      <>
        <Header />
        <p>Loading...</p>
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
      {!isLoading && (
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
