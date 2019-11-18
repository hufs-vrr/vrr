import React from 'react'
import styled from 'styled-components'
import {gql} from 'apollo-boost'
import {withRouter} from 'react-router-dom'
import {useQuery} from 'react-apollo-hooks'
import Loader from '../Components/Loader'
import Avatar from '../Components/Avatar'

const GET_USER = gql`
    query seeUser($username: String!){
        seeUser(username: $username){
            avatar
            username
            fullName
            isFollowing
            isSelf
            bio
            followingCount
            followersCount
            postsCount
            posts {
                id
                files {
                    url
                }
                likeCount
                commentCount
            }
        }
    }
`

const Wrapper = styled.div`
    min-height: 60vh;
`

const Header = styled.header`
`

const HeaderColum = styled.div`
`

export default withRouter(({match: {params:{username}}}) => {
    const {data, loading} = useQuery(GET_USER, {
        variables: {username}
    })
    if(loading) {
        return (
        <Wrapper>
            <Loader/>
        </Wrapper>
        )
    } else {
        console.log(data)
        const {
            avatar,
            username,
            fullName,
            isFollowing,
            isSelf,
            bio,
            followingCount,
            followersCount,
            postsCount,
            posts
        } = data.seeUser;
        return ( 
            <>
                <Header>
                    <HeaderColum>
                        <Avatar size='lg' url={avatar}/>
                    </HeaderColum>
                </Header>
            </>
        )
    }
})