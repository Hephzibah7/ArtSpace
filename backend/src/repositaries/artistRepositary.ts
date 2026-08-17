import Artist from "../models/artist.js";
import {NotFoundError } from "../errors/AppError.js";
import prisma from "../../prisma/prisma.js";


async function createArtist(data: any, userId: string) {
    const isExist = await prisma.user.findUnique({
        where: {
            id: userId
        }

    })
    if(!isExist) throw new NotFoundError("User does not Exist")
    const newArtist=new Artist({...data,userId:userId});
    await newArtist.save();
}

async function getArtist(artistId:string){
    const artistData=await Artist.findById({artistId});
    if(!artistId) throw new NotFoundError("Artist does not exist")
    return artistData;
}
async function getAllArtist(){
    const allArtistData=await Artist.find({});
    return allArtistData;
}
async function deleteArtist(artistId:string){
    const artistData=await Artist.findById(artistId);
    if(!artistData) throw new NotFoundError("Artist does not exist");
    await Artist.findByIdAndDelete({userId:artistId});
}
async function updateArtist(data:any, artistId:string){
    const artistData=await Artist.findById(artistId);
    if(!artistData) throw new NotFoundError("Artist does not exist")
    const newArtistData = await Artist.findByIdAndUpdate(artistId,
        data,
        {new:true}
        )
        return newArtistData;
}

const artistRepositary={
    createArtist,
    getArtist,
    getAllArtist,
    deleteArtist,
    updateArtist

}

export default artistRepositary;