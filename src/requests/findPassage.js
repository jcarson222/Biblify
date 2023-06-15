import axios from "axios";

const token = "Token 059f33afd1e99d57a89963d727229b3ec3938ed6";
axios.defaults.headers.common["Authorization"] = token;

const findPassageUrl = "https://api.esv.org/v3/passage/text/?q=";

export const findPassage = async (search) => {
  try {
    const res = await axios.get(`${findPassageUrl}${search}`);
    const data = res.data.query;
    // console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
