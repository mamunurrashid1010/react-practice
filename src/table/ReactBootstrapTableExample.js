import React, { Component } from 'react';
import { Button, Table } from 'react-bootstrap';

class ReactBootstrapTableExample extends Component {
    
    constructor(){
        super();
        this.state={
            member:[
                { id:1, name: 'Ayaan',  age: 26  },
                { id:2, name: 'Ahana',  age: 22  },
                { id:3, name: 'Peter',  age: 40  },
                { id:4, name: 'Virat',  age: 30  },
                { id:5, name: 'Rohit',  age: 32  },
                { id:6, name: 'Dhoni',  age: 37  }
                ],
        }
    }
 

    // table row data view
    tabRow(){
        // data view example-1
        if(this.state.member instanceof Array){
          return this.state.member.map(function(data, i){
              return (
                <tr>
                    <td>{i+1}</td>
                    <td>{data.name}</td>
                    <td>{data.age}</td>
                    <td><Button className='btn btn-warning'>Edit</Button></td>
                </tr>
            );
 
          })
        }

        // data view example 2
        // var testdata=this.state.member;
        //     return testdata.map(function(data, i){
        //         return (
        //           <tr>
        //               <td>{i+1}</td>
        //               <td>{data.name}</td>
        //               <td>{data.age}</td>
        //               <td><Button className='btn btn-warning'>Edit</Button></td>
        //           </tr>
        //       );
   
        //     })
    }


    render() {
        // example 3
        const tableData = [
            { id:1, name: 'Ayaan',  age: 26  },
            { id:2, name: 'Ahana',  age: 22  },
            { id:3, name: 'Peter',  age: 40  },
            { id:4, name: 'Virat',  age: 30  },
            { id:5, name: 'Rohit',  age: 32  },
            { id:6, name: 'Dhoni',  age: 37  }
            ];
        var data = tableData.map((data,i)=>{
            return (
                <tr>
                    <td>{i+1}</td>
                    <td>{data.name}</td>
                    <td>{data.age}</td>
                    <td><Button className='btn btn-warning'>Edit</Button></td>
                </tr>
            );
        })

        return (
            <div>
                <Table striped bordered hover >
                    <thead>
                        <tr>
                            <th>SL</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* example-1 */}
                        {this.tabRow()}

                        {/* example-3 */}
                        {/* {data} */}
                    </tbody>
                </Table>
            </div>
        );
    }
}

export default ReactBootstrapTableExample;