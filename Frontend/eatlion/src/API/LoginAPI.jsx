import axios from "axios";

// userid, password 입력 받으면 token 값 return
// error 시, token = '', 성공 시, token = 'Token 값'
const LogInAPI = async (userid, password) => {
  let message = "";
  let access_token = "";
  let refresh_token = "";
  await axios
    .post("http://15.165.226.61:3000/users/login/", {
      user_id: userid,
      password: password,
    },{withCredentials:true,})
    .then((response) => {
      message = response.data.message;
      access_token = response.data.access_token;
      refresh_token = response.data.refresh_token;
      axios.defaults.headers.common["Authorization"] = `Bearer ${access_token}`;
//쿠키에 저장하기
    // let access_date = new Date(Date.now() + 86400e3);
    // let refresh_date = new Date(Date.now() + 86400e3);
      document.cookie = `access_token=${access_token}; max-age=7200`;
      
      document.cookie = `refresh_token=${refresh_token}; max-age=86400`; 

      
      // console.log(message)
      
      //console.log(response.headers['set-cookie']['access_token'])
      
      // token = response.data.Token;
      // sessionStorage.setItem('token',JSON.stringify(token));
    })
    .catch(function (error) {
      console.log(error);
    });
  return message;
};

export default LogInAPI;
