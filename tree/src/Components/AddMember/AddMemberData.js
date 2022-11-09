import handleAxios from "../HandleAxios/HandleAxios";

function AddMemberData(memberData){
    handleAxios("family","post",memberData)
    .then((res)=>{
        console.log("res",res);
    });
}

export default AddMemberData;