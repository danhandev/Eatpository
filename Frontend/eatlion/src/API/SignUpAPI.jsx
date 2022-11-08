import axios from "axios";

// userid, password 입력 받으면 token 값 return
// error 시, token = '', 성공 시, token = 'Token 값'
const SignUpAPI = async (userid, password, userphone) => {
  let token = "";

  await axios
    .post(
      "http://15.165.226.61/users/signup/",
      {
        user_id: userid,
        password: password,
        phone_number: userphone,
      },
      { withCredentials: true }
    )
    .then((response) => {
      token = response.data.Token;
      sessionStorage.setItem("token", JSON.stringify(token));
    })
    .catch(function (error) {
      console.log(error);
    });
  return token;
};

export default SignUpAPI;
