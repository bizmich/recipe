import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface PageQuery {
  pageSize: number;
  page: number;
}

interface Todo {
  id: number;
  title: string;
}

const useTodos = (query: PageQuery) => {
  return useQuery<Todo[], Error>({
    queryKey: ["posts", query],
    queryFn: () =>
      axios
        .get("https://jsonplaceholder.typicode.com/todos", {
          params: {
            _start: (query.page - 1) * 10,
            _limit: query.pageSize,
          },
        })
        .then((res) => res.data),
    keepPreviousData: true,
  });
};

export default useTodos;
