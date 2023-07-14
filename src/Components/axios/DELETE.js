import axios from "axios";
import preURL from "../../preURL/preURL";

export default DELETE = (url, header) => {
  const axiosConfig = header
    ? {
        headers: {
          ITTASEKKI: token,
        },
      }
    : {};

  axios
    .delete(preURL + url, axiosConfig)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};
