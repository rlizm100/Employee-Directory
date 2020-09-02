import React, { Component } from 'react';
import ReactTable from "react-table";
import 'react-table/react-table.css'
import "./App.css"
class App extends Component {

  constructor(props){
      super(props);
      this.state={
          posts:[]
      }
  }

  
  componentDidMount() {
    const url = "https://jsonplaceholder.typicode.com/users";

    fetch(url, {
      method: 'GET',
    }).then(response => response.json()).then(posts => {
     this.setState({posts: posts})
    })
  }


  
  render() {
    const data = this.state.posts;
   const columns = [
      {
        Header: "Name",
        accessor: "name",
        
      },
      {
        Header: "ID",
        accessor: "id",
      
      },
      {
        Header: "Email",
        accessor: "email"
      },
      {
        Header: "Phone Number",
        accessor: "phone"
      }
  
    ]
    return (
      
      <div>
      <ReactTable
            className="-striped -highlight"
            data={data}
            filterable
            columns={columns}
            defaultPageSize={10}
          >
      
          </ReactTable>
      </div>
          

    );
  }
}

export default App;
