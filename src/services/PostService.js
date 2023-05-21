import { myAxios } from "./Helper";

export const loadAllPosts = async (pageNumber, pageSize) => {
  const response = await myAxios.get(
    `/post/?pageNumber=${pageNumber}&pageSize=${pageSize}&sortBy=postId&sortDir=desc`
  );
  return response.data;
};
