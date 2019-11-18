import React from 'react'
import styled from 'styled-components'
import { gql } from 'apollo-boost'
import { useQuery } from 'react-apollo-hooks'
import Loader from '../Components/Loader'
import SquarePost from '../Components/SquarePost'

const FEED_QUERY = gql`
{
    seeFeed {
        id
        location
        caption
        user {
            id
            avatar
            username
        }
        files {
            id
            url
        }
        isLiked
        comments {
            id
            text
            user {
                id
                username
            }
        }
        likeCount
        createdAt
    }
}
`

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 80vh;
`

const File = styled.div`
    width: 100%;
    height: 600px;
    position: absolute;
    top: 0;
    background-image: url(${props => props.src});
    background-size: cover;
    background-position: center;
    opacity: ${props => (props.showing ? 1: 0 )};
    transition: opacity .5s linear;
`

export default () => {
    const {data, loading, error} = useQuery(FEED_QUERY)
    return (
        <Wrapper>
            {loading && <Loader/>}
            {!loading && 
                data && 
                data.seeFeed && 
                data.seeFeed.map(post => (<>
                  {/* {post.id} */}
                  {post.location}
                  {post.caption}
                  {post.likeCount}
                  {post.isLiked}
                  {post.createdAt}
                  {post.files && post.files.map( (file, index) =><File key={file.id} src={file.url} />)}
                  <br/>
                  {/* <SquarePost 
                    key={post.id}
                    id={post.id} 
                    // files={post.files}
                    likeCount={post.likeCount}
                    commentCount={post.commentCount}
                    /> */}
                  
                </>)
                    // <Post 
                    //     key={post.id}
                    //     id={post.id} 
                    //     location={post.location}
                    //     caption={post.caption}
                    //     user={post.user}
                    //     files={post.files}
                    //     likeCount={post.likeCount}
                    //     isLiked={post.isLiked}
                    //     comments={post.comments}
                    //     createdAt={post.createdAt}
                    // />
                )
            }
        </Wrapper>
    )
}