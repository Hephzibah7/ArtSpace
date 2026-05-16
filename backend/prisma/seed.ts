import adminSeed from "./seeds/adminSeed.js";
import roleSeed from "./seeds/roleSeed.js";
import prisma from "./prisma.js";

async function main() {
  await roleSeed();
  await adminSeed();
}

main()
  .catch((e) => {

    console.error(e);

    process.exit(1);

  })
  .finally(async () => {

    await prisma.$disconnect();

  });