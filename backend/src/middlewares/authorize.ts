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
        role: true
      }
    });

    if (!user) {
      throw new InternalServerError();
    }

    // ADMIN bypass
    if (user.role.name === ADMIN) {
      return next();
    }


    // Permission check
    if (
      !user.role.permissions.includes(requiredPermission)
    ) {
      throw new ForbiddenError("Access Denied");
    }

    next();
  };
};

export default authorize;