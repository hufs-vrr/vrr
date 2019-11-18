import React from "react"
import styled from "styled-components"
import { Link, withRouter } from "react-router-dom"
import Input from './Input'
import useInput from '../Hooks/useInput'
import { HeartEmpty, User, Compass, Logo, ACS } from "./Icons"
import { useQuery } from "react-apollo-hooks"
import { ME } from "../SharedQueries"

const Header = styled.header`
    width: 100%;
    border: 0;
    background-color: #454F59;
    border-bottom:${props => props.theme.boxBorder}
    border-radius: 0px;
    margin-bottom: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px 0px;
    z-index: 2;
`

const HeaderWrapper = styled.div`
    width: 100%;
    max-width: ${props => props.theme.maxWidth};
    display: flex;
    justify-content: center;
`

const HeaderColumn = styled.div`
    width: 100%;
    text-align: center;
    width: 70%;
    &:first-child{
        margin-right: auto;
        text-align: left;
    }
    &:last-child{
        margin-left: auto;
        text-align: right;
    }
`
const SearchInput = styled(Input)`
    background-color: ${props => props.theme.bgColor};
    padding: 5px;
    font-size: 14px;
    border-radius: 3px;
    width: 480px;
    height: auto;
    text-align: center;
    &::placeholder{
        opacity:0.8;
        font-weight: 200;
    }
    border-color: #DEE3E8;
`

const HeaderLink = styled(Link)`
    &:not(:last-child) {
        margin-right: 30px;
    }
`

export default withRouter(({history}) => {
    const search = useInput("")
    const { data } = useQuery(ME)
    const onSearchSubmit = (e) => {
        e.preventDefault();
        history.push(`/search?term=${search.value}`)
    }
    return (
        <Header>
            <HeaderWrapper>
                <HeaderColumn>
                    <Link to="/">
                        <Logo />
                        <ACS />
                    </Link>
                </HeaderColumn>
                <HeaderColumn>
                    <form onSubmit={onSearchSubmit}>
                        <SearchInput value={search.value} onChange={search.onChange} placeholder="search"/>
                    </form>
                </HeaderColumn>
                <HeaderColumn>
                    <HeaderLink to="/explore">
                        <Compass fill="white"/>
                    </HeaderLink>
                    <HeaderLink to="/notifications">
                        <HeartEmpty fill="white"/>
                    </HeaderLink>
                    {!(data && data.me) ? 
                    <HeaderLink to="/#">
                        <User fill="white"/>
                    </HeaderLink>
                    : <HeaderLink to={data.me.username}>
                        <User fill="white"/>
                        </HeaderLink>
                    }
                </HeaderColumn>
            </HeaderWrapper>
        </Header>
    )
})
