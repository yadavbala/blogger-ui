import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
class Users extends React.Component{
    constructor(){
        super()
        this.state={
            users:[]
        }
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((response)=>{
            //console.log(response)
            const users=response.data
            this.setState({users})
        })
    }
    render(){
        return(
            <div>
                <h1>USERS LIST-{this.state.users.length}</h1>
                <ul className='userlist'>
                    {
                        this.state.users.map(user=>{
                        return <li className='usersublist' key={user.id}><Link to={`./users/${user.id}`}>{user.name}</Link></li>
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default Users