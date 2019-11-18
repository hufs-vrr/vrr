import {gql} from 'apollo-boost'

export const SEARCH = gql `
    query search($term: String!){
        searchPost(term: $term){
            id
            files {
                url
            }
            likeCount
            commentCount
            createdAt
        }
        searchUser(term: $term) {
            id
            avatar
            username
            isFollowing
            isSelf
        }
    }
`