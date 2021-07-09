import { PostAsync, GetAsync, PutAsync, DeleteAsync,GetAsyncBody } from "./api";

export async function updateProfilePost(body) {
  return await PostAsync(`${process.env.REACT_APP_BASE_URL}/`, body, true);
}
