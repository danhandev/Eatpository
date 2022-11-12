import axios from "axios";

// userid, password 입력 받으면 token 값 return
// error 시, token = '', 성공 시, token = 'Token 값'
const ListAPI = async (resultnum, categorynum) => {
  let store = "";
  await axios
    .get(
      "http://www.eatpository.site/stores/selected/",
      {
        params: { editor: resultnum, category: categorynum },
      },
      {
        withCredentials: true,
      }
    )
    .then((response) => {
      store = response.data.stores;
      //브라우저DB에 반환하는 response를 저장해뒀다가 main으로 돌아올때 결과를 유지합니다.
      sessionStorage.setItem("result", JSON.stringify(store));
    })
    .catch(function (error) {
      console.error(error);
    });
  return store;
};
export default ListAPI;
