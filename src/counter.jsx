import { Component } from "react";
import "./index.css";

export class Counter extends Component{
    constructor(props){
        super(props);

        this.state={
            count:0,
            somme:6,
            
        };
    }
    
    render(){
        let color="black";
        let c=this.state.count;
        if(c<= 10 && c > 0){
            color="green";
        }
        else if(c>10){
            color="red";
        }
        else if(c<0){
            color="blue";
        }
        
        return(
            <div>
                <h1>{this.props.children}</h1>
                 <h2 >Counter : <span style={{color:color}}> {this.state.count}</span></h2>
                <Somme valeur={this.state.somme}/>
                <button onClick={()=>{
                    let c=this.state.count;
                    
                        c++;
                        this.setState({count:c})
                        
                    
                    
                    
                }}>Increment</button>
                <button onClick={()=>{
                    let c=this.state.count;
                    c=0;
                    
                    this.setState({count:c})
                }}>Reset</button>
                <button onClick={()=>{
                    let c=this.state.count;
                    c--;
                    this.setState({count:c})
                }}>Decrement</button>
            </div>
        );
    }
}

export class Somme extends Component{
    constructor(props){
        super(props);

        this.state={
            texte:"walid",
        };
    }
    
    render(){
        
        return(
            <div>
                
                {/* {this.state.texte} */}
                {/* <h2>Somme :{this.props.valeur}</h2> */}
            </div>
        );
    }
}
//  let cl = "redColor";
// if(this.state.count>0 && this.state.count<=10){
//     cl = "redColor";
//   }else if(this.state.count>10){
//     cl = "greenColor";
//   }else if(this.state.count<0){
//     cl = "blueColor";
//   }
//   return (
//     <div>
//       <h1>{this.props.children}</h1>
//       <h2 className={cl} ><span style={{ color: "black" }}>counter: </span> {this.state.count}</h2>