import userRepositary from "../repositaries/userRepositary.js";

async function createUser(body:any){
    await userRepositary.createUser(body);
}
async function getUser(id:string){
    await userRepositary.getUser(id);
}
async function deleteUser(id:string){
    await userRepositary.deleteUser(id);
}

const userService={
    createUser:createUser,
    getUser:getUser,
    deleteUser:deleteUser,
}

export default(userService);