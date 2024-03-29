import axios from "axios";

const FindPwAPI = async (userid, userphone, NewPw) => {
  let findpw = "";
  await axios
    .get(
      "http://www.eatpository.site/users/password/",
      {
        params: {
          user_id: userid,
          phone_number: userphone,
          new_password: NewPw,
        },
      },

      { withCredentials: true }
    )
    .then((response) => {
      findpw = response.data.message;
      // response.data.password;
    })
    .catch(function (error) {
      console.error(error);
    });
  return findpw;
};

export default FindPwAPI;
