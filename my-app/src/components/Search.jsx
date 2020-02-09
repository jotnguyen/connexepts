import React from 'react';
import './Search.css'
import axios from 'axios';
class Search extends React.Component{
constructor(props) {
    super(props);

    this.state = {
        query: '',
        results:{},
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
    render () {
      const {query} =this.state;
     
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
                   />                  
<i className="fa fa-search search-icon"/>
              </label>
           
           
           
           
           
            </div>
         
        )
    }
}

export default Search