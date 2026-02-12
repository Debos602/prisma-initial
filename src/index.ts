import "dotenv/config";
import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL ?? "" });
const prisma = new PrismaClient({ adapter });

async function main() {
    // const user = await prisma.user.create({
    //     data: {
    //         name: "Rinku10 Das",
    //         email: "Rinku10@example.com",

    //     }
    // });
    // console.log(user);


    // const userData = await prisma.user.findMany({

    // });
    // console.log(userData);


    // const userData = await prisma.user.findFirstOrThrow({
    //     where: {
    //         id: 2,
    //     },
    // });
    // console.log(userData);
    // Update user data
    // const updatedUser = await prisma.user.update({
    //     where: {
    //         id: 1,
    //     },
    //     data: {
    //         email: "kabbo@gmail.com"
    //     }
    // });

    // console.log(updatedUser);

    // const updateProfilePhoto = await prisma.user.updateMany({
    //     where: {
    //         profilePhoto: "",
    //     },
    //     data: {
    //         profilePhoto: "https://example.com/new-profile-photo.jpg",
    //     },
    // });
    // console.log(updateProfilePhoto);
    // const updateProfilePhoto = await prisma.user.updateManyAndReturn({
    //     where: {
    //         id: {
    //             gt: 3,
    //         }
    //     },
    //     data: {
    //         profilePhoto: "https://example.com/new-profile-photo.default.jpg",
    //     },
    // });
    // console.log(updateProfilePhoto);

    // Delete user data


    // const deleteUser = await prisma.user.delete({
    //     where: {
    //         id: 4,
    //     }
    // });
    // console.log(deleteUser);
    const deleteUser = await prisma.user.deleteMany({
        where: {
            id: {
                lt: 6,
            },
        },
    });
    console.log(deleteUser);


    console.log(prisma.user.findMany());






}
main()
    .catch(console.error)
    .finally(async () => await prisma.$disconnect());
