import React from 'react'

// functional component called Users
const Users = (props) => {
    return (
        <div className='border mt-2 p-2 bg-dark text-light'>
            <h3>Name: {props.name}</h3>
            <h5>Age: {props.age}</h5>
        </div>
        
    )
}

export default Users;