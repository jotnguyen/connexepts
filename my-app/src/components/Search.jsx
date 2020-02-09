import React from 'react';
import './Search.css'
import axios from 'axios';
import Graph from "./Graph.js"
class Search extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            query: '',
            results:"",
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
          this.onSubmit(this.state.query);
        }
      }
  
    onSubmit = () => {
        // console.log(axios.get('/poop'))

        if(this.state.query != ""){
            const new_query = this.state.query.split(' ').join('_')
            axios.get('/'+new_query)
                .then( (response) => {
                // console.log(response.data);
                this.setState({results: response.data});
                // console.log(response.status);
                // console.log(response.statusText);
                // console.log(response.headers);
                // console.log(response.config);
        })};
    }
    render () {
      const {query} = this.state.query;
     
        return (
            <div className="container">
             {/*Heading*/}
             <h2 className="heading">Connexepts, a Concept Connection for Any and Everything</h2>
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
           
           
           
            <Graph results = {this.state.results}/>
            </div>
        )
    }
}

export default Search