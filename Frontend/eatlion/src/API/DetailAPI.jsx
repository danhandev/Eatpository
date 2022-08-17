//DetailAPI.jsx

import axios from "axios";

// userid, password 입력 받으면 token 값 return
// error 시, token = '', 성공 시, token = 'Token 값'
const DetailAPI = async (id) => {
  let storeName = "";
  await axios
    .get(
      "http://localhost:8000/stores/" + id,
      {
        params: { id: id },
      },
      {
        withCredentials: true,
      }
    )
    .then((response) => {
      storeName = response.data;
      sessionStorage.setItem('resultName',JSON.stringify(storeName))
    })
    .catch(function (error) {
      console.error(error);
    });
  return storeName;
};
export default DetailAPI;