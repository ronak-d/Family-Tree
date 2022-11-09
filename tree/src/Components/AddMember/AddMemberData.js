import handleAxios from "../HandleAxios/HandleAxios";

function AddMemberData(memberData){
    handleAxios("familyMember","post",memberData)
    .then((res)=>{
        console.log("res",res);
    });
}

