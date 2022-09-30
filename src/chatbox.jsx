import { Component, Fragment } from "react";
import "./chatbox.css";

export class Chat extends Component{
    constructor(props){
        super(props);
            this.state={
                chat: { message: "", reponse: "" },
               affich:"",
               allchat:[],
               active: true
            }
            this.questions=["Hello","How are you?","What is your name?"];
            this.answers=["Hi!","Iam fine thank you","Iam a chat boot"];
        
    }
    handlechange=(e)=>{
        this.setState({affich:e.target.value});
        console.log(this.state.affich);

    }
    
    inpquestion=(e)=>{
        e.preventDefault();
    let {affich,answer}=this.state;

        if(this.questions[0]==affich){
            answer=this.answers[0];
            this.setState({affich:""});
            console.log(this.answers[0]);

        }
        else if(this.questions[1]==affich){
            answer=this.answers[1];
            this.setState({affich:""});
            console.log(this.answers[1]);
        }
        else if(this.questions[2]==affich){
            answer=this.answers[2];
            this.setState({affich:""});
            console.log(this.answers[2]);
        }
        
        this.setState({answer:answer});
        
    }


render(){
    let {affich,answer}=this.state;
    
    return(
    <>
       <div className="container" >
       <div className="header">
     
        <h1>  <i class="bi bi-chat-fill"></i> Chating!!</h1><hr /></div>
       
        <div className="mess">{answer}</div>
         <form onSubmit={this.inpquestion}>
        <input type="text" value={this.state.affich} 
                        onChange={this.handlechange}
                        placeholder="Text here"
                        />
        <button><i class="bi bi-send"></i></button>
         
         </form>
       </div>
       
    </>)
}
}