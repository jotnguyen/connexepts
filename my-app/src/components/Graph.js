import Graph from "react-graph-vis";
import React from 'react';

var nodes = [];

var edges = [];

const options = {
  layout: {
    hierarchical: false
  },
  nodes:{
    shape: "circle",
    color: "#e00000",
  },
  edges: {
    color: "#000000",
    length: 100,
    arrows: ''
  }
};

const events = {
  select: function(event) {
    var { nodes, edges } = event;
    console.log("Selected nodes:");
    console.log(nodes);
    console.log("Selected edges:");
    console.log(edges);
  }
};





class NodeGraph extends React.Component{
  constructor(props) {
      super(props);
  
      this.state = {
          query: '',
          results:{},
          loading: false,
          message: '',

          
      }
  }
  parseJSON = (json) => {
    console.log(JSON.parse(json));
    let node = JSON.parse(json);
    const newGraph = {
      nodes:  node["edges"].map( (edge) => {return {id : edge["@id"], label: edge["@id"], title: edge["@id"] }} )      ,
      edges:  node["edges"].map( ( edge) => {return {from : edge["start"]["@id"], to: edge["end"]["@id"] } })    
    }
    return newGraph
  }
  render(){
    const results = this.props.results
    console.log('result '+results)
    if(results == ""){
      return(
        <h1>please enter a topic you would like to learn more about and explore</h1>
      )
    }else{
      console.log(results)
      let result = this.parseJSON(results)
      console.log(result)
      // return(<div>hey</div>)

    return(
      <div>
        <Graph graph={result} options={options} events={events} style={{ height: "640px"}} />
      </div>
    )
    }
  }
}
export default NodeGraph