import api from "../../../config/axios";
import { ENDPOINTS } from "../../../config/endpoints";

interface ContactMessage {
  name: string;
  email: string;
  message: string;
}

export async function sendContactMessage(data: ContactMessage) {
  try {
    const response = await api.post(ENDPOINTS.contacts, data);
    return response.data;
  } catch (err: any) {
    console.error("Failed to send message:", err);
    throw err;
  }
}
