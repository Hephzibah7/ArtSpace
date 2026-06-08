import cron from "node-cron";
import Product from "../models/product.js";
import { BadRequestError } from "../errors/AppError.js";

cron.schedule("* * * * *", async () => {

  console.log(
    "Checking expired reservations..."
  );

  try {

    const result =
      await Product.updateMany(

        {
          status: "RESERVED",

          reservationExpiresAt: {
            $lt: new Date()
          }
        },

        {
          $set: {

            status: "AVAILABLE",

            reservedBy: null,

            reservationExpiresAt: null
          }
        }
      );

    console.log(
      `Released ${result.modifiedCount} reservations`
    );

  } catch (error) {
     throw new BadRequestError("Reservation Cron Failed", error);
  }
});