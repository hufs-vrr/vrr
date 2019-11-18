import React from 'react'
import {withRouter} from 'react-router-dom'
import SearchPresenter from './SearchPresenter'
import {SEARCH} from './SearchQueries'
import {useQuery} from 'react-apollo-hooks'

export default () => {
    const term = 'seoul'
    const {data, loading} = useQuery(SEARCH, {
        skip: term === undefined,
        variables: {
            term
        }
    })
    return <SearchPresenter searchTerm={term} loading={loading} data={data}/>
}