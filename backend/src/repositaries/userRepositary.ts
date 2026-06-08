import prisma from "../../prisma/prisma.js";
import { BadRequestError, InternalServerError } from "../errors/AppError.js";
import bcrypt from "bcrypt"
import { BUYER, SELLER } from "../utils/constants.js";
import jwt from "jsonwebtoken" 
import { userLoginType } from "../types/userTypes.js";

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

async function loginUser(user:userLoginType){
    const {email, password} = user;
    const existingUser = await prisma.user.findUnique({
        where:{
            email:email
        }
    });
    if(!existingUser) throw new BadRequestError("User not Found");

    //check password validation
    const isPasswordValid=await bcrypt.compare(password, existingUser.password);
    if(!isPasswordValid) throw new BadRequestError("Invalid Credentials");

    const key=process.env.SECRET_KEY as string;
    const token=jwt.sign({userId:existingUser.id}, key,{
            expiresIn:"1h",
        });
    if(!token) throw new InternalServerError("Token not generated");
     const userCredentials={
            name:existingUser.name,
            email:existingUser.email,
            token:token,
        }

        return userCredentials;
}

const userRepositary={
    createUser:createUser,
    getUser:getUser,
    deleteUser:deleteUser,
    loginUser:loginUser
}

export default userRepositary;