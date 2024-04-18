import React ,{ Component } from "react";
class Students extends Component{
    render(){
    return ( 
    <div>
        <h1>name: {this.props.name}</h1>
        <h2>class:{this.props.class}</h2>
        <h2>ID:{this.props.id}</h2>
    </div>
    );
    }
  }
export default Students;