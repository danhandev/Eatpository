import axios from "axios";

// userid, password 입력 받으면 token 값 return
// error 시, token = '', 성공 시, token = 'Token 값'
const LogInAPI = async (userid, password) => {
  let token = "";
  await axios
    .post("http://localhost:8000/users/login/", {
      user_id: userid,
      password: password,
    },{withCredentials:true,})
    .then((response) => {
      token = response.data.Token;
    })
    .catch(function (error) {
      console.log(error);
    });
  return token;
};

export default LogInAPI;
