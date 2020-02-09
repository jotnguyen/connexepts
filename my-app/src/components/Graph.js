import Graph from "react-graph-vis";
import React from 'react';


const options = {
  nodes: {
    borderWidth: 5,
    size: 100,
    color: {
      border: "#222222",
      background: "#666666"
    },
    font: { color: "#eeeeee" }
  },
  edges:{
    color: "#eeeeee",
  }
};


const events = {
  click: function(event) {
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
      nodes:  node["edges"].map( (edge) => {return {id : edge["@id"], label: edge["surfaceText"], title: edge["@id"] }} )      ,
      edges:  node["edges"].map( ( edge) => {return {from : edge["start"]["@id"], to: edge["end"]["@id"] } })    
    }
    return newGraph
  }
  render(){
    const results = this.props.results
    console.log('result '+results)
    if(results == ""){
      return(
        <div id="graph">
          <h1 style={{color: "red"}}>please enter a topic you would like to learn more about and explore</h1>
        </div>
      )
    }else{
      console.log(results)
      let result = this.parseJSON(results)
      console.log(result)
      // return(<div>hey</div>)

    return(
      <div id="graph">
        <Graph graph={result} options={options} events={events} style={{ height: "920px"}} />
      </div>
    )
    }
  }
}
export default NodeGraph