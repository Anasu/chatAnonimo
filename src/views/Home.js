import React, {Component} from 'react'
import ChatInput from '../components/ChatInput';
import Display from '../components/Display'

class Home extends Component 
{
  state = {
    username: '',
    messages: [{input: 'primer mensaje'}],
  }


  handleSubmit = (message) => {
    this.setState({
      messages: [...this.state.messages, message]
    })
  }

  render() 
  {
    const { messages } = this.state

    return (
      <div className="container bg-light p-5">
        <h3>Chat General</h3>
        <Display showMsg={this.state.messages} />
        <ChatInput handleSubmit={this.handleSubmit}/>
      </div>
    );
  }
}

export default Home;
