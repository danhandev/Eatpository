import axios from "axios";

// userid, password 입력 받으면 token 값 return
// error 시, token = '', 성공 시, token = 'Token 값'
const signUpAPI = async (userid:any,userphone:any, password:any) => {
  let token = ''
  await axios.post("http://localhost:8000/user/signup/", {
    user_id: userid,
    phone_number:userphone,
    password: password,
  })
  .then((response) => {
    token = response.data.Token;
  })
  .catch(function (error) {
    console.log(error);
  });
  return token;
}

export default signUpAPI;