import React, { Component } from 'react';
class Cats extends Component {
    state = { data:[],
        loading: true,
        query: null,
        type:'cats'}
    
componentDidMount() {
    this.fetchData();
    };}

fetchData = async () => {
    let url = 'x'
    let searchParams = newURLSearchParams();
        searchParams.state('page', this.state.page)
}

render () 
    return (
        <h1>The Cats Page</h1>
    )
