import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
class PostShow extends React.Component{
    constructor(){
        super()
        this.state={
            user:{},
            post:{},
            comments:[]
        }
        
    }
    componentDidMount(){
        console.log(this.props)
        const postId=this.props.match.params.id
        axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then((response)=>{
            console.log(response)
            const post=response.data
            triggered(post)
            this.setState({post})
            /*axios.get(`https://jsonplaceholder.typicode.com/users/${post.userId}`)//can be done in this way
            .then((response)=>{
                const user=response.data
               this.setState({user})
            })*/
        })
         const triggered=(post)=>{
            const userId=post.userId
            console.log(userId)
            axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
            .then((response)=>{
                const user=response.data
               this.setState({user})
            })
        }
       
       axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
       .then((response)=>{
           console.log(response)
           const comments=response.data
           this.setState({comments})
       })
      
    }
    render(){
        return(
            <div>
                <div className='postdetails'>
                    <h1>USER NAME:{this.state.user.name}</h1>
                    <h1>TITLE:{this.state.post.title}</h1>
                    <h1>BODY:{this.state.post.body}</h1>
                </div>
                <h1>COMMENTS</h1>
                <ul className='userlist colorcomments'>
                    {
                        this.state.comments.map(comment=>{
                        return <li className='usersublist' key={comment.id}>{comment.body}</li>
                        })
                    }
                </ul>
                <p className='linkuser'><Link to={`/user/${this.state.user.id}`}>More posts of author:{this.state.user.name}</Link></p>
            </div>
        )
    }
}

export default PostShow