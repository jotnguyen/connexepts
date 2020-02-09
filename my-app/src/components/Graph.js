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

for(var i = 0; i < 50; i++){
  nodes.push({id: i, label: ("Node" + i)});
  if(i>0){
    edges.push({from:i,to:i-1});
  }
}

edges.push({from:0,to:49});

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
  return(
    <div>
      <Graph graph={{nodes, edges}} options={options} events={events} style={{ height: "640px"}} />
    </div>
  )
  }
}
export default NodeGraph