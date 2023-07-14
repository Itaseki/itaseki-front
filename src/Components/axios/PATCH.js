import axios from "axios";
import preURL from "../../preURL/preURL";

export default PATCH = (url, body, header) => {
  const axiosConfig = header
    ? {
        headers: {
          ITTASEKKI: token,
        },
      }
    : {};

  axios
    .patch(preURL + url, body, axiosConfig)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};
