import React from 'react';
import './Search.css'
import axios from 'axios';
import Graph from "./Graph.js"
class Search extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            query: '',
            results:{ nodes : [ {id: 1, label: "?", title:"?"}], edges: []},
            loading: false,
            message: ''
        }
    }

    /*fetchSearchResults = ( updatedPageNo, query) =>{
        const searchUrl =

    };*/

    handleOnInputChange = (event) => {
        const query = event.target.value;
        this.setState ({query, loading: true, message: ''});
    };
    onKeyDown = (e) => {
        // 'keypress' event misbehaves on mobile so we track 'Enter' key via 'keydown' event
        // console.log(e)
        if (e.key === 'Enter') {
          e.preventDefault();
          e.stopPropagation();
          this.onSubmit();
        }
      }
  
    onSubmit = () => {
        // console.log(axios.get('/poop'))
        axios.get('/poop')
            .then(function (response) {
            console.log(response.data);
            this.props.result = response.data;
            console.log(response.status);
            console.log(response.statusText);
            console.log(response.headers);
            console.log(response.config);
  });
    }
    render () {
      const {query} = this.state.query;
     
        return (
            <div className="container">
             {/*Heading*/}
             <h2 className="heading">Live Search: React Application</h2>
              {/* Search input*/}
              <label className="search-label" htmlFor="search-input">
                  <input
                  type="text"
                  name="query"
                  value={query}
                  id="search-input"
                  placeholder="Search..."
                  
                  onChange={this.handleOnInputChange}
                  onKeyDown={this.onKeyDown}
                   />                  
                 <i className="fa fa-search search-icon"/>
              </label>
           
           
           
            <Graph result = {this.state.results}/>
            </div>
        )
    }
}

export default Search