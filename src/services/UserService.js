import { myAxios } from "./Helper";

export const registerUser = async (user) => {
  const response = await myAxios.post("/auth/register", user);
  return response.data;
};

export const loginUser = async (loginDetail) => {
  const response = await myAxios.post("/auth/login", loginDetail);
  return response.data;
};

export const getUser = async (userId) => {
  const resp = await myAxios.get(`/user/${userId}`);
  return resp.data;
};
