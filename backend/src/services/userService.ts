import userRepositary from "../repositaries/userRepositary.js";
import { userLoginType } from "../types/userTypes.js";

async function createUser(body:any){
    await userRepositary.createUser(body);
}
async function getUser(id:string){
    const data=await userRepositary.getUser(id);
    return data;
}
async function deleteUser(id:string){
    await userRepositary.deleteUser(id);
}
async function loginUser(user:userLoginType){
    const data=await userRepositary.loginUser(user);
    return data;
}

const userService={
    createUser:createUser,
    getUser:getUser,
    deleteUser:deleteUser,
    loginUser,
}

export default(userService);