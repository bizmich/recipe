import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";

interface PageQuery {
  pageSize: number;
}

const usePostList = (query: PageQuery) => {
  return useInfiniteQuery({
    queryKey: ["posts"],
    queryFn: ({ pageParam = 1 }) =>
      axios
        .get("https://jsonplaceholder.typicode.com/posts", {
          params: {
            _start: (pageParam - 1) * 10,
            _limit: query.pageSize,
          },
        })
        .then((res) => res.data),
    keepPreviousData: true,
    getNextPageParam: (lastPage, allPage) => {
      return lastPage.length > 0 ? allPage.length + 1 : undefined;
    },
  });
};

export default usePostList;
