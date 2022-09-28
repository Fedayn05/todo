
import ReactDOM from 'react-dom/client';
// import React from 'react';
import React,{Component} from 'react'; 
import './index.css';
import "bootstrap/dist/css/bootstrap.min.css"
import { Counter } from './counter';
import { Todo } from './todo';
// import Table from './Table';

class Welcome extends React.Component{
  render(){
    return (
       <div>
         <h1>helooooooo</h1>
         
       </div>
    )
 
  }
}

// class App extends Component {
//   render() {
//     return (
//       <div className="container">
//         <Table />
//       </div>
//     )
//   }
// }

class Table extends Component {
  render() {
    return (
      <table className="container bg-primary">
        <thead>
          <tr>
            <th>Name</th>
            <th>Job</th>
            
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Charlie</td>
            <td>Janitor</td>
          </tr>
          <tr>
            <td>Mac</td>
            <td>Bouncer</td>
          </tr>
          <tr>
            <td>Dee</td>
            <td>Aspiring actress</td>
          </tr>
          <tr>
            <td>Dennis</td>
            <td>Bartender</td>
          </tr>
        </tbody>
      </table>
    )
  }
}

// export default Table

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Counter> Hello fedayns</Counter> */}
    <Todo/>
    {/* <Welcome/>
    <Table/> */}
    {/* <App/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();


