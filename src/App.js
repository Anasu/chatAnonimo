import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Nav from 'react-bootstrap/Nav'

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
        <Nav
          activeKey="/"
          onSelect={(selectedKey) => console.log(`selected ${selectedKey}`)}
        >
          <Nav.Item>
            <Nav.Link href="/">Inicio</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/categories">Categorías</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/my-chats">Mis Chats</Nav.Link>
          </Nav.Item>
          
        </Nav>
  
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