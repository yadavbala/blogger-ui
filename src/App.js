import React from 'react'
import {Link,Route,BrowserRouter} from 'react-router-dom'
import Home from './Components/Home'
import Users from './Components/Users'
import Posts from './Components/Posts'
import UserShow from './Components/UserShow'
import PostShow from './Components/PostShow'
function App(){
    return(
        <BrowserRouter>
            <div>
                <Route path='/' component={Home}></Route>
                <Route path='/users' component={Users} exact={true}></Route>
                <Route path='/users/:id' component={UserShow}></Route>
                <Route path='/user/:id' component={UserShow}></Route>
                <Route path='/post/:id' component={PostShow}></Route>
                <Route path='/posts' component={Posts} exact={true}></Route>
                <Route path='/posts/:id' component={PostShow}></Route>
            </div>
        </BrowserRouter>
    )
}

export default App
