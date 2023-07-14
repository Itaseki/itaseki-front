import axios from "axios";
import preURL from "../../preURL/preURL";

export default GET = (url, header) => {
  const axiosConfig = header
    ? {
        headers: {
          ITTASEKKI: token,
        },
      }
    : {};

  axios
    .get(preURL + url, axiosConfig)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};
