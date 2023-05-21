import TodoCard from "@/components/Todos/TodoCard";
import useTodos from "@/components/react-query/hooks/Pagination/useTodos";
import { Container, Pagination } from "@mantine/core";
import { useState } from "react";

const PaginationPage = () => {
  const [page, setPage] = useState(1);
  const pageSize = 10;
  const { data, isLoading, error } = useTodos({ pageSize, page });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;
  return (
    <Container py={50}>
      {data && <TodoCard data={data} />}
      <div className="flex justify-center mt-10">
        <Pagination value={page} onChange={setPage} total={pageSize} />
      </div>
    </Container>
  );
};

export default PaginationPage;
