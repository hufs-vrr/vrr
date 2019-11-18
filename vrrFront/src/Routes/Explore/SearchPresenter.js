import React, {useState} from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import FatText from '../../Components/FatText'
import Loader from '../../Components/Loader'
import UserCard from '../../Components/UserCard'
import SquarePost from '../../Components/SquarePost'

const Wrapper = styled.div`
    height: 1500px;
`

const Section = styled.div`
    margin-bottom:50px;
    display: grid;
    grid-gap:25px;
    grid-template-columns: repeat(4, 160px);
    grid-template-rows: 160px;
    grid-auto-rows: 160px;
`
const PostSection = styled(Section)`
    grid-template-columns: repeat(4, 200px);
    grid-template-rows: 200px;
    grid-auto-rows: 200px;
`

const SearchPresenter = ({searchTerm, loading, data}) => {
    const [DA, setDA] = useState([])
    const [DateArray, setDateArray] = useState("")

    if (searchTerm === undefined) {
        return (
            <Wrapper>
                <FatText text={"Search for something"}/>
            </Wrapper>
        )
    } else if (loading === true) {
        return (
            <Wrapper>
                <Loader/>
            </Wrapper>
        )
    } else if (data && data.searchUser && data.searchPost) {
        // if (data.searchPost !== 0 ) {
        //     data.searchPost.map(post => {
        //         const Date = post.createdAt.slice(5,10).split('-').join('')
        //         if(Date === DateArray){
        //             setDA([
        //                 ...DA,
        //                 post
        //             ])
        //         } else{
        //             setDateArray(Date)
        //             setDA([
        //                 ...DA,
        //                 post.createAt,
        //                 post
        //             ])
        //         }
        //     })
        // }
        return (
            <Wrapper>
                
                <Section>
                <UserCard
                    username='hochan'
                    isFollowing='true'
                    url='https://icon-library.net/images/default-user-icon/default-user-icon-4.jpg'
                    isSelf='true'
                />
                <UserCard
                    username='Sejin'
                    isFollowing='true'
                    url='https://icon-library.net/images/default-user-icon/default-user-icon-4.jpg'
                    isSelf='false'
                />
                <UserCard
                    username='hochan2'
                    isFollowing='true'
                    url='https://icon-library.net/images/default-user-icon/default-user-icon-4.jpg'
                    isSelf='false'
                />
                </Section>
                
                <FatText text={data.searchPost[4].createdAt.slice(0,10)}/> 
                <br/>
                <br/>
                <PostSection>
                    <SquarePost
                        key={data.searchPost[3].id}
                        likeCount={data.searchPost[3].likeCount} 
                        commentCount={data.searchPost[3].commentCount} 
                        file={data.searchPost[3].files[0]}
                    />
                    <SquarePost
                        key={data.searchPost[4].id}
                        likeCount={data.searchPost[4].likeCount} 
                        commentCount={data.searchPost[4].commentCount} 
                        file={data.searchPost[4].files[0]}
                    />
                    
                </PostSection>
                
                    <FatText text={data.searchPost[2].createdAt.slice(0,10)}/> 
                <br/>
                <br/>
                    <PostSection>
                    <SquarePost
                        key={data.searchPost[2].id}
                        likeCount={data.searchPost[2].likeCount} 
                        commentCount={data.searchPost[2].commentCount} 
                        file={data.searchPost[2].files[0]}
                    />
                    </PostSection>
                    
                    
                <FatText text={data.searchPost[0].createdAt.slice(0,10)}/> 
                <br/>
                <br/>
                <PostSection>
                    {data.searchPost.length === 0 ? (
                        <FatText text="No Posts Found" />
                    ) : (
                        // data.searchPost.map(
                        //     post => (
                        //             <SquarePost
                        //                 key={post.id}
                        //                 likeCount={post.likeCount} 
                        //                 commentCount={post.commentCount} 
                        //                 file={post.files[0]}
                        //             />
                        //     )
                        // )
                        
                        console.log(data.searchPost)
                    )}
                    
                    <SquarePost
                        key={data.searchPost[0].id}
                        likeCount={data.searchPost[0].likeCount} 
                        commentCount={data.searchPost[0].commentCount} 
                        file={data.searchPost[0].files[0]}
                    />
                    <SquarePost
                        key={data.searchPost[1].id}
                        likeCount={data.searchPost[1].likeCount} 
                        commentCount={data.searchPost[1].commentCount} 
                        file={data.searchPost[1].files[0]}
                    />
                    </PostSection>
            </Wrapper>
        )
    }
}

SearchPresenter.propTypes = {
    searchTerm: PropTypes.string,
    loading: PropTypes.bool
}

export default SearchPresenter