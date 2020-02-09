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

render(){
  const result = this.props.result;
  return(
    <div>
      <Graph graph={result} options={options} events={events} style={{ height: "640px"}} />
    </div>
  )
  }
}
export default NodeGraph