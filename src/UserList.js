import React , {Component} from 'react';
import Users from './Users';

// list of users
const users = [
    {
        
        name:"Sachin",
        age : 10
    },

    {   
        
        name:"Som",
        age : 20
    },

    {
        
        name:"Suraj",
        age : 30
    },

    {
        
        name:"Saurav",
        age : 35
    },

    {
        
        name:"Rohan",
        age : 40
    }
]


class UserList extends Component {
    render() {
      return (  
        <div>
          <h1 className='border bg-warning mt-2 p-2'>{this.props.title}</h1>
          <div>
              {users.map((user,i) => <Users key={i} name={user.name} age={user.age}/>)}
          </div>
        </div>
      );
    }
  }

export default UserList;