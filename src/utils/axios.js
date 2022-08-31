import axios from "axios";
import toast from "react-hot-toast";

export const GET = async (url) => {
  try {
    return await axios.get(url);
  } catch (err) {
    toast.error(err.message);
  }
};
