import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

// Views
import Home from './views/Home'

class ChatAnonimo extends Component 
{
  state = {
    username: 'Usuario 1'
  }

  render() 
  {
    console.log(`desde la app ${this.state.username}`)

    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/categories">Categorías</Link>
            </li>
            <li>
              <Link to="/dashboard">Mis Chats</Link>
            </li>
          </ul>
  
          <hr />
  
          <Switch>
            <Route exact path="/">
              <ChatGral username={this.state}/>
            </Route>
            <Route path="/categories">
              <Categories />
            </Route>
            <Route path="/my-chats">
              <MyChats />
            </Route>
          </Switch>
        </div>
      </Router>
    )
  }
}

class ChatGral extends Component
{
  constructor(props)
  {
    super(props);

    this.state = props.username
  }

  render()
  {
    return (
      <div>
        <Home username={this.state.username}/>
      </div>
    )
  }
}

function Categories () 
{
  return (
    <div>
      <h2>Categorías</h2>
    </div>
  );
}

function MyChats () 
{
  return (
    <div>
      <h2>Mis Chats</h2>
    </div>
  );
}

export default ChatAnonimo