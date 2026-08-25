import prisma from "../../prisma/prisma.js";
import { BadRequestError, NotFoundError } from "../errors/AppError.js";


async function getCart(userId:string){
    let cart = await prisma.cart.findUnique({
        where: {
            userId:userId
        },
        include:{
            items:true
        }
    })
    if(!cart){
        cart = await prisma.cart.create({
            data:{
                userId
            },
            include:{
                items:true
            }
        })
    }
    return cart;
}

async function addItem(userId:string, productId:string, quantity:number){
    if(quantity<0) throw new BadRequestError("Quantity should be greater than zero");
    let cart = await prisma.cart.findUnique({
        where:{
            userId:userId
        }
    })
    if(!cart){
         cart = await prisma.cart.create({
            data:{
                userId
            },
            include:{
                items:true
            }
        })
    }
    let existingItem = await prisma.cartItem.findUnique({
        where:{
            productId:productId
        }
    })
    if(existingItem){
        return await prisma.cartItem.update({
            where:{
                id:existingItem.id
            },
            data:{
                quantity:{
                    increment:quantity
                }
            }
        })
    }
    await prisma.cartItem.create({
        data:{
            cartId:cart.id,
            productId,
            quantity
        }
    })
}

async function updateItem(userId:string, productId:string, quantity:number){
    if(quantity<0) throw new BadRequestError("Quantity should be greater than zero");

    const cart = await prisma.cart.findUnique({
        where:{
            userId
        }
    })

    if(!cart) throw new NotFoundError("Cart Not Found");

    const item = await prisma.cartItem.findUnique({
        where:{
            productId
        }
    })
    if(!item) throw new NotFoundError("Item Not Found");
    await prisma.cartItem.update({
        where:{
            id:item.id
        },
        data:{
            quantity
        }
    })

}

async function removeItem(userId:string, productId:string){
     const cart = await prisma.cart.findUnique({
        where:{
            userId
        }
    })

    if(!cart) throw new NotFoundError("Cart Not Found");

    const item = await prisma.cartItem.findUnique({
        where:{
            productId
        }
    })
    if(!item) throw new NotFoundError("Item Not Found");

    await prisma.cartItem.delete({
        where:{
            id:item.id
        }

    })
}

async function deleteCart(userId:string){
     const cart = await prisma.cart.findUnique({
        where:{
            userId
        }
    })

    if(!cart) throw new NotFoundError("Cart Not Found");

    await prisma.cart.delete({
        where:{
            id:cart.id
        }
    })
}

const cartRepositary={
    getCart:getCart,
    addItem,
    updateItem,
    deleteCart,
    removeItem
}

export default cartRepositary;
