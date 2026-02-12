import "dotenv/config";
import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL ?? "" });
const prisma = new PrismaClient({ adapter });

async function main() {
    // const user = await prisma.user.create({
    //     data: {
    //         name: "Isha Das",
    //         email: "Isha@example.com",
    //         profilePhoto: "https://example.com/profile-photo.jpg",
    //     }
    // });
    // console.log(user);


    // const userData = await prisma.user.findMany({
    //     where: {
    //         id: 3,
    //     },
    // });
    // console.log(userData);


    const userData = await prisma.user.findFirstOrThrow({
        where: {
            id: 4,
        },
    });
    console.log(userData);



}
main()
    .catch(console.error)
    .finally(async () => await prisma.$disconnect());
