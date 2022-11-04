import handleAxios from "../HandleAxios/HandleAxios";

function AddMemberData(memberData){
    handleAxios("details","post",memberData)
    .then((res)=>{
        console.log(res);
    })
}