import artistRepositary from "../repositaries/artistRepositary.js";

async function createArtist(data:any, artistId:string){
    await artistRepositary.createArtist(data, artistId);
}

async function getArtist(artistId:string){
    const artistData=await artistRepositary.getArtist(artistId);
    return artistData;
}

async function getAllArtist(){
    const allArtistData=await artistRepositary.getAllArtist();
    return allArtistData;
}
async function deleteArtist(artistId:string){
    await artistRepositary.deleteArtist(artistId);
}

async function updateArtist(data:any, artistId:string){
    const artistData=artistRepositary.updateArtist(data, artistId);
    return artistData;
}

const artistService={
    createArtist,
    getArtist,
    getAllArtist,
    deleteArtist,
    updateArtist
}

export default artistService;