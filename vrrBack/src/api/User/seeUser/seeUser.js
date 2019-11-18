import { prisma } from "../../../../generated/prisma-client"

export default {
    Query: {
        seeUser: async(_, args) => {
            const { username } = args
            console.log(username)
            return prisma.user({ username })
        }
    }
}