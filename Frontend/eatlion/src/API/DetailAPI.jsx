//DetailAPI.jsx

import axios from "axios";

// userid, password 입력 받으면 token 값 return
// error 시, token = '', 성공 시, token = 'Token 값'
const DetailAPI = async (id) => {
  let storeDetail = null;
  await axios
    .get(
      "http://15.165.226.61/stores/store-info",

      {
        params: { store_id: id },
      },
      {
        withCredentials: true,
      }
    )
    .then((response) => {
      storeDetail = response.data;
      sessionStorage.setItem("detail", JSON.stringify(storeDetail));
    })
    .catch(function (error) {
      console.error(error);
    });
  return storeDetail;
};
export default DetailAPI;
