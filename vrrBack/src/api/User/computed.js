import { prisma } from "../../../generated/prisma-client"

export default {
    User: {
        posts: ({id}) => prisma.user({ id }).posts(),
        following: ({id}) => prisma.user({ id }).following,
        followers: ({id}) => prisma.user({ id }).followers,
        likes: ({id}) => prisma.user({ id }).likes(),
        comments: ({id}) => prisma.user({ id }).comments(),
        rooms: ({id}) => prisma.user({id}).rooms(),
        fullName: (parent) => {
            return `${parent.firstName} ${parent.lastName}`
        },
        isFollowing: async (parent, args, {request}) => {
            const { user } = request
            const { id: parentId } = parent
            const exist = await prisma.$exists.user({ 
                AND: [{id: parentId}, {followers_some: {id: user.id}}]
            })
            try {
                return exist
            } catch (error) {
                console.log(error)
                return false
            }
        },
        postsCount: ({ id }) =>
            prisma
            .postsConnection({ where: { user: { id } } })
            .aggregate()
            .count(),
        followingCount: ({ id }) =>
            prisma
            .usersConnection({ where: { followers_some: { id } } })
            .aggregate()
            .count(),
        followersCount: ({ id }) =>
            prisma
            .usersConnection({ where: { following_none: { id } } })
            .aggregate()
            .count(),
        isSelf: (parent, _, {request}) => {
            const { user } = request
            const {id: parentId } = parent
            return user.id === parentId
        }
    }
}