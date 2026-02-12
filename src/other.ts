import prisma from "./prisma";

async function others() {
    // create some user data / insert some user data
    // const insertUsers = await prisma.user.createMany({
    //     data: [
    //         {
    //             name: "Mir",
    //             email: "mir@example.com ",
    //         },
    //         {
    //             name: "Tanmoy",
    //             email: "mir@example.com ",
    //         },
    //         {
    //             name: "Mizan",
    //             email: "mir@example.com ",
    //         },
    //         {
    //             name: "Imun",
    //             email: "mir@example.com ",
    //         },
    //         {
    //             name: "isha",
    //             email: "mir@example.com ",
    //         },
    //         {
    //             name: "prottasha",
    //             email: "prottasha@example.com ",
    //         },
    //     ]
    // });
    // console.log(insertUsers);

    const users = await prisma.user.findMany({

        where: {
            name: {
                contains: "ph.com",
                mode: "insensitive",
            }
        },
        orderBy: {
            name: "asc",
        }
    });
    console.log(users);
}

others()

