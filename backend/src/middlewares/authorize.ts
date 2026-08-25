import { Request, Response, NextFunction } from "express";

import {
  ForbiddenError,
  InternalServerError
} from "../errors/AppError.js";

import { ADMIN } from "../utils/constants.js";

import prisma from "../../prisma/prisma.js";

const authorize = (requiredPermission: string) => {

  return async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {

    const user = await prisma.user.findUnique({
      where: {
        id: req.user
      },

      include: {
        roles: {
          include:{
            role:true
          }
        }
      }
    });

    if (!user) {
      throw new InternalServerError();
    }

     // ADMIN bypass
    const isAdmin = user.roles.some(
      userRole => userRole.role.name === ADMIN
    );

    if (isAdmin) {
      return next();
    }


   // Check permission across ALL roles
    const hasPermission = user.roles.some(
      userRole =>
        userRole.role.permissions.includes(requiredPermission)
    );

    if (!hasPermission) {
      throw new ForbiddenError("Access Denied");
    }
    next();
  };
};

export default authorize;