import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import prisma from "../prisma.js";
import { InternalServerError } from "../../src/errors/AppError.js";
import { ADMIN } from "../../src/utils/constants.js";

export default async function adminSeed() {

  const hashedPassword = await bcrypt.hash("hephzibah", 10);

  const adminRole = await prisma.role.findUnique({
    where: { name: ADMIN }
  })

  if (!adminRole) throw new InternalServerError();


  await prisma.user.upsert({

    where: {
      email: "hephzibahranjan@gmail.com"
    },

    update: {},

    create: {
      name: "Hephzibah Ranjan",

      email: "hephzibahranjan@gmail.com",

      password: hashedPassword,

      role: {
        connect:
          { id: adminRole.id }

      }
    }
  });

}

