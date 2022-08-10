import axios from "axios";

// userid, password 입력 받으면 token 값 return
// error 시, token = '', 성공 시, token = 'Token 값'
const ListAPI = async (resultnum, categorynum) => {
  let store = "";
  await axios
    .get(
      "http://localhost:8000/stores/selected/",
      {
        params: { editor: resultnum, category: parseInt(categorynum) },
      },
      {
        withCredentials: true,
      }
    )
    .then((response) => {
      store = response.data.stores;
    })
    .catch(function (error) {
      console.error(error);
    });
  return store;
};
export default ListAPI;