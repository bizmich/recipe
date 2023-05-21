import usePostList from "@/components/react-query/hooks/InfiniteQueries/usePostList";
import { Button, Container, List } from "@mantine/core";

const InfiniteScrollPage = () => {
  const pageSize = 10;
  const { data, isLoading, fetchNextPage, isFetchingNextPage } = usePostList({
    pageSize,
  });

  console.log("data:", data);

  if (isLoading) return <p>Loading...</p>;

  return (
    <Container py={50}>
      <List>
        {data &&
          data.pages.map((page) => {
            return page.map((el: any) => {
              return <List.Item key={el.id}>{el.title}</List.Item>;
            });
          })}
      </List>
      <Button onClick={() => fetchNextPage()} disabled={isFetchingNextPage}>
        {isFetchingNextPage ? "Загрузка..." : "Загрузить еще"}
      </Button>
    </Container>
  );
};

export default InfiniteScrollPage;
