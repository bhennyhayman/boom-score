import { api } from "./api";

export const fetchTodayMatches = async () => {
  const res = await api(`${import.meta.env.VITE_API_URL}/api/matches`);
  return res.data.matches;
};
