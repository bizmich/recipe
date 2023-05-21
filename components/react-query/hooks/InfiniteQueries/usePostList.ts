import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";

interface PageQuery {
  pageSize: number;
}

interface Post {
  id: number;
  body: string;
  title: string;
}

const usePostList = (query: PageQuery) => {
  return useInfiniteQuery<Post[], Error>({
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
