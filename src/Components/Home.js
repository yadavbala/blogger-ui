import React from 'react'
import {Link} from 'react-router-dom'
function Home(){
    return(
        <div className='header'>
            <Link to='/'>Home</Link> |
            <Link to='/users'>Users</Link> |
            <Link to='/posts'>Posts</Link> 
        </div>
    )
}

export default Home

