import prisma from "../prisma.js";
import { permissions } from "../../src/utils/permissions.js";
import { ADMIN, BUYER, SELLER } from "../../src/utils/constants.js";




export default async function roleSeed() {

  const buyerRole = await prisma.role.upsert({
    where: {
      name: BUYER
    },

    update: {},

    create: {
      name: BUYER,
      
      permissions: [
        permissions.READ_ALL_PRODUCTS,
        permissions.READ_PRODUCT
      ]
    }
  });

  const sellerRole = await prisma.role.upsert({
    where: {
      name: SELLER
    },

    update: {},

    create: {
      name: SELLER,

      permissions: [
        permissions.CREATE_PRODUCT,
        permissions.DELETE_PRODUCT,
        permissions.UPDATE_PRODUCT,

      ]
    }
  });

  const adminRole = await prisma.role.upsert({
    where: {
      name: ADMIN
    },

    update: {},

    create: {
      name: ADMIN,

      permissions: [
        permissions.CREATE_PRODUCT,
        permissions.DELETE_PRODUCT,
        permissions.UPDATE_PRODUCT,
      
        permissions.READ_ALL_USERS
      ]
    }
  });
}

