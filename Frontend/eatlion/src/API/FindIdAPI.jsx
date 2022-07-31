import axios from "axios";

const FindIdAPI = async (userphone) => {
    let find_id ="";
    await axios
    .get("http://localhost:8000/users/user-id/",{
       
            phone_number:userphone,
        }
    ,{withCredentials:true,})
    .then((response)=>{
        find_id = response.data.user_id;
    }) 
    .catch(function(error){
        console.error(error);
    });
    return find_id;
};

export default FindIdAPI;