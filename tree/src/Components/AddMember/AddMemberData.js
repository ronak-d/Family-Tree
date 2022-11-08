import handleAxios from "../HandleAxios/HandleAxios";

function AddMemberData(memberData){
    handleAxios("Family/familyMember","patch",memberData)
    .then((res)=>{
        console.log(res);
    })
}