import axios from "axios"

export const read = async () => {
  try {
    const res = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/clientInfo/read`);
    return res;
  } catch (err) {
    console.error('error info', err);
    return;
  }

  return;
}