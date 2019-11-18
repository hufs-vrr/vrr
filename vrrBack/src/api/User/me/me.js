import { prisma } from "../../../../generated/prisma-client"
import { USER_FRAGMENT } from "../../../fragment"

export default {
    Query: {
        me: async(_, args, {request, isAuthenticated}) => {
            isAuthenticated(request)
            const { user } = request
            return prisma.user({ id: user.id })
            // return prisma.user({ id: user.id }).$fragment(USER_FRAGMENT)
        }
    }
}