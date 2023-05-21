import PostCard from "@/components/Posts/PostCard";
import usePostList from "@/components/react-query/hooks/InfiniteQueries/usePostList";
import { Button, Container } from "@mantine/core";

const InfiniteScrollPage = () => {
  const pageSize = 10;
  const { data, isLoading, fetchNextPage, isFetchingNextPage, error } =
    usePostList({
      pageSize,
    });

  if (isLoading) return <Container>Loading...</Container>;
  if (error) return <Container>{error.message}</Container>;

  return (
    <Container py={50}>
      <div className="w-full space-y-3">
        {data &&
          data.pages.map((page) => {
            return page.map((el) => {
              return (
                <PostCard key={el.id} description={el.body} title={el.title} />
              );
            });
          })}
      </div>
      <div className="flex justify-center mt-5">
        <Button onClick={() => fetchNextPage()} loading={isFetchingNextPage}>
          {isFetchingNextPage ? "Загрузка..." : "Загрузить еще"}
        </Button>
      </div>
    </Container>
  );
};

export default InfiniteScrollPage;
