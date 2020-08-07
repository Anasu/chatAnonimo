import React, {Component} from 'react'
import ChatInput from '../components/ChatInput';
import Display from '../components/Display'

class Home extends Component 
{
  constructor(props) {
    super(props);

    this.state.username = props.username

    console.log(this.state.username)
  }
  state = {
    username: '',
    messages: [{
      input: 'primer mensaje', 
      nick: 'Alguien'
    }],
  }


  handleSubmit = (message) => {
    message.nick = this.state.username

    this.setState({
      messages: [...this.state.messages, message]
    })
  }

  render() 
  {
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
