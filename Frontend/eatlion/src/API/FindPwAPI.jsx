import axios from "axios";

const FindPwAPI = async (userid,userphone) => {
    let findpw=''
    await axios
    .get("http://localhost:8000/users/password/",{

           params:{user_id:userid,phone_number:userphone}}
            

        
    ,{withCredentials:true,})
    .then((response)=>{
        findpw=response.data.password;
    })
    .catch(function(error){
        console.error(error);
    });
    return findpw
};

export default FindPwAPI;