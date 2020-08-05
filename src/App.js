import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Home from './views/Home'

export default function BasicExample() {
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
            <ChatGral />
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
  );
}


function ChatGral() {
  return (
    <div>
      <Home />
    </div>
  );
}

function Categories() {
  return (
    <div>
      <h2>Categorías</h2>
    </div>
  );
}

function MyChats() {
  return (
    <div>
      <h2>Mis Chats</h2>
    </div>
  );
}
