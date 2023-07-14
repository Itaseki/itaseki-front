import axios from "axios";
import preURL from "../../preURL/preURL";

export default POST = (url, body, header) => {
  const axiosConfig = header
    ? {
        headers: {
          ITTASEKKI: token,
        },
      }
    : {};

  axios
    .post(preURL + url, body, axiosConfig)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};
