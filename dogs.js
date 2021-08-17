import React, { Component } from 'react';

class Dogs extends Component {
    state = { data:[],
        loading: true,
        query: null,
        type:'dogs'
    }
    componentDidMount() {
        this.fetchData();
        };}
    
    fetchData = async () => {
        let url = 'y'
        let searchParams = newURLSearchParams();
            searchParams.state('page', this.state.page)
    }

render ()
return(
    <h1>The Dog Page</h1>
)