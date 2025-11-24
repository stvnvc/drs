import { type AxiosResponse } from "axios";
import axios from "../../../config/axios";
import { ENDPOINTS } from "../../../config/endpoints";
import { type User } from "../types";

export const getUsers = async (): Promise<User[]> => {
  const response = await axios.get<AxiosResponse>(ENDPOINTS.users);
  return response.data.data;
};

export const createUser = async (formData: FormData): Promise<User> => {
  const response = await axios.post(ENDPOINTS.users, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return response.data;
};
