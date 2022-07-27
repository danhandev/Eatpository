import axios from "axios";

// userid, password 입력 받으면 token 값 return
// error 시, token = '', 성공 시, token = 'Token 값'
const SignUpAPI = async (userid, password,userphone) => {
  let token = ''
  await axios.post("http://localhost:8000/users/signup/", {
    user_id: userid,
    password: password,
    phone_number:userphone,
  }
  )
  .then((response) => {
    token = response.data.Token;
  })
  .catch(function (error) {
    console.log(error);
  });
  return token;
}

export default SignUpAPI;