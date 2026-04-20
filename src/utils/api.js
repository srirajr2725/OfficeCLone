import axios from "axios";

export const fetchWords = async (letters) => {
  const res = await axios.get(`http://localhost:5000/api/words/${letters}`);
  return res.data;
};
