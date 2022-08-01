import axios from "axios";

const FindPwAPI = async (userphone,userid) => {
    let result =false;
    await axios
    .get("http://localhost:8000/users/password/",{
       
            phone_number:userphone,
            user_id:userid,
        }
    ,{withCredentials:true,})
    .then((response)=>{
        result=true;
    }) 
    .catch(function(error){
        console.error(error);
    });
    return result;
};

export default FindPwAPI;