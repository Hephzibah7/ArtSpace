import prisma from "../../prisma/prisma.js";
import { BadRequestError, InternalServerError } from "../errors/AppError.js";
import bcrypt from "bcrypt"
import { BUYER, SELLER } from "../utils/constants.js";


async function createUser(user:any){
    const {name, email, password}=user;
    const isExist = await prisma.user.findUnique({
        where:{
            email:email
        }
    });
    if(isExist) throw new BadRequestError("User already Exists");

    const hashedPassword = await bcrypt.hash(password, 10);

    const role = await prisma.role.findUnique({
    where: { name: SELLER }
  })

  if(!role) throw new InternalServerError();

    await prisma.user.create({
        data:{
            name:name,
            email:email,
            password:hashedPassword,
            role: {
            connect:
          { id: role.id }

      }
        }
    })
    
}

async function getUser(id:string){
    const data=await prisma.user.findUnique({
        where:{
            id:id
        }
    })
    return data;
}

async function deleteUser(id:string){
    await prisma.user.delete({
        where:{
            id:id
        }
    })
}

const userRepositary={
    createUser:createUser,
    getUser:getUser,
    deleteUser:deleteUser
}

export default userRepositary;