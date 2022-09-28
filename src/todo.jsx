import { Component } from "react";
import "./index.css";

export class Todo extends Component{
    constructor(props){
        super(props);

        this.state={
            task: {
                content: "",
                id: 0,
                done: false,
              },
            list:[],
            alert: false,
        }
    }
    // handleChange=(e)=>{
    //     this.setState({task:e.target.value});
    // }

    handleSubmit=(e)=>{
        e.preventDefault();
        let {task ,list:tasklist} = this.state;
        if (task.content.trim().length !== 0){
        let uId = Math.random() * 10000 + "_" + new Date().getTime();
        task.id=uId;
        task.done=false;
        tasklist.push(this.state.task)
        
        this.setState({list:tasklist});
        console.log(this.state.list);
        this.setState({task:{content:""}});
      }
      else{
        this.setState({alert:true});
      }
    }
    // handleSupprimer=(e)=>{
    //     this.setState({list:[]});
    // }

    handledelete=(index)=>{
        let {list:tasklist}=this.state;
        tasklist.splice(index,1);
        this.setState({list:tasklist});
    }
    handleDone = (id) => {
        let { list: tasklist } = this.state;
        tasklist = tasklist.map((item) => {
          if (item.id === id) {
            item.done = !item.done;
          }
          return item;
        });
        this.setState({ list: tasklist });
      };

    render(){
        let { list,alert } = this.state;
        if (alert === true) {
          setTimeout(() => {
            this.setState({ alert: false });
          }, 10000);
        }
        return(
          <>
        {alert === true ? (
          <div className="alert alert-danger text-center fs-2" role="alert">
            <p> Veuillez saisir une Valeur dans le champ</p>
            <p className="mb-0"></p>
          </div>
        ) : (
          ""
        )}
            <div id="cont" className="card w-50 mx-auto   text-white
            my-5">
                <form action="" onSubmit={this.handleSubmit} className="text-center my-3">
                    <h1 className="text-black hed">My todo list</h1>
                    <input className="form-control"
                     onChange={(e)=>{
                        // console.log(e.target.value);
                        this.setState({task:{content:e.target.value}});
                        console.log(this.state.task);
                    }} type="text" 
                    value={this.state.task.content}/>
                    <button className="btn btn-warning mt-3 ">Ajouter</button>
                    
                </form>
                <h2 className="text-center text-black">List of Tasks</h2>
                <ol className="list-group list-group-numbered">
          {list.map((item, index) => {
            return (
              <li className="list-group-item d-flex " key={index}>
                <div >
                <span
                 className={
                  item.done
                    ? "fw-bold text-decoration-line-through"
                    : ""
                }
                >
                  {item.content}
                </span>
                </div>
                
                <div>
                <button className="btn btn-sm btn-danger mx-1 ms-5 float-end"
                  onClick={() => {
                    this.handledelete(index);
                  }}
                >
                  <i className="bi bi-trash"></i>
                </button>
                <div className="form-check form-switch mx-1 me-5">
                <input
                className="form-check-input"
                role="switch"
                  type="checkbox"
                  onChange={() => {
                    this.handleDone(item.id);
                  }}
                   checked={
                    item.done==true?true:false
                   }
                />
                </div>
                </div>
              </li>
            );
          })}
        </ol>
                    {/* <button onClick={this.handleSupprimer}>Supprimer tout</button> */}
            </div>
            </>
        )

    }
}