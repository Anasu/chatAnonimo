import React, {Component} from 'react'
import ChatInput from '../components/ChatInput';

class Home extends Component 
{
  state = {
    messages: [],
  }


  handleSubmit = (message) => {
    this.setState({
      messages: [...this.state.messages, message]
    })
  }

  render() 
  {
    return (
      <div className="container">
        <ChatInput handleSubmit={this.handleSubmit}/>
      </div>
    );
  }
}

export default Home;
