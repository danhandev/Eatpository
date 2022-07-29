import axios from "axios";

const FindIdAPI = async (userphone) => {
    let find_id ="";
    await axios
    .get("http://127.0.0.1:8000/users/user-id",{
        headers:{
            phonenumber : userphone
        }
    })
    .then((response)=>{
        find_id = response.data.user_id;
    }) 
};

export default FindIdAPI;