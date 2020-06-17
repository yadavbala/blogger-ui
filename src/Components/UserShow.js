import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
class UserShow extends React.Component{
   
    constructor(){
        super()
        this.state={
            user:{},
            posts:[]
        }
    }
    componentDidMount(){
        console.log(this.props.match.params.id)
       const userId=this.props.match.params.id
       axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
       .then((response)=>{
           const user=response.data
           this.setState({user})
       })
       axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
       .then((response)=>{
           const posts=response.data
           this.setState({posts})
       })
    }
    render(){
        console.log(this.props)
        return(
            <div>
                <h1>USER NAME:<span className='username'>{this.state.user.name}</span></h1>
                <h1>POSTS WRITTEN BY USER</h1>
                <ul className='userlist'>
                    {
                        this.state.posts.map(post=>{
                        return <li className='usersublist' key={post.id}><Link to={`/post/${post.id}`}>{post.title}</Link></li>
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default UserShow