import React ,{ Component } from "react";

class HelloWorld extends Component{
  constructor(props){
    super(props);
    this.state = {
      name : "Adith",
    };
  }
  static getDerivedStateFromProps(props, state){
    
    return props.name ? {name:props.name}:state;
  }
  shouldComponentUpdate(){
    return true;
   
  }
  getSnapshotBeforeUpdate(prevProps , prevState){
    console.log(prevState.name);
    return null;
  }
  componentDidUpdate(){
    console.log("Completed");
  }

    render(){
    return (<>
    <h1>hello {this.state.name}</h1>
    <button onClick={()=>{
      this.setState({name:"sojay"})
    }}>Change Name To Sojay</button>
    </>
    );
    }
  }

  class Child extends React.Component{


  }
export default HelloWorld;