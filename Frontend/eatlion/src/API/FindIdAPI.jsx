import axios from "axios";

const FindIdAPI = async (userphone) => {
  let findid = "";
  await axios
    .get(
      "http://www.eatpository.site/users/user-id/",
      { params: { phone_number: userphone } },

      { withCredentials: true }
    )
    .then((response) => {
      findid = response.data.user_id;
    })
    .catch(function (error) {
      console.error(error);
    });
  return findid;
};

export default FindIdAPI;
