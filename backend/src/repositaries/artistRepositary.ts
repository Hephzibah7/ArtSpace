import Artist from "../models/artist.js";
import { BadRequestError, NotFoundError } from "../errors/AppError.js";
import prisma from "../../prisma/prisma.js";


async function createArtist(data: any, artistId: string) {
    const isExist = await prisma.user.findUnique({
        where: {
            id: artistId
        }

    })
    if(!isExist) throw new NotFoundError("Artist does not Exist")
    const newArtist=new Artist({...data,userId:artistId});
    await newArtist.save();
}

async function getArtist(artistId:string){
     const isExist = await prisma.user.findUnique({
        where: {
            id: artistId
        }

    })
    if(!isExist) throw new NotFoundError("Artist does not Exist")
    const artistData=await Artist.findById({userId:artistId});
    return artistData;
}
async function getAllArtist(){
    const allArtistData=await Artist.find({});
    return allArtistData;
}
async function deleteArtist(artistId:string){
     const isExist = await prisma.user.findUnique({
        where: {
            id: artistId
        }

    })
    if(!isExist) throw new NotFoundError("Artist does not Exist")
    await Artist.findByIdAndDelete({userId:artistId});
}
async function updateArtist(data:any, artistId:string){
     const isExist = await prisma.user.findUnique({
        where: {
            id: artistId
        }

    })
    if(!isExist) throw new NotFoundError("Artist does not Exist")
    const artistData = await Artist.findByIdAndUpdate(artistId,
        data,
        {new:true}
        )
        return artistData;
}

const artistRepositary={
    createArtist,
    getArtist,
    getAllArtist,
    deleteArtist,
    updateArtist

}

export default artistRepositary;