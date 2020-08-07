import React, {Component} from 'react'
import { InputGroup, FormControl } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'


class ChatInput extends Component
{
  constructor(props) 
  {
    super(props);
    
    this.initialState = {
        'input' : '',
        'nick' : ''
    };

    this.state = this.initialState;
  }

  handleChange = event => {
    const { value } = event.target;

    this.setState({
        'input' : value,
        'nick' : ''
      });
  }

  submitMsg = () => {
    this.props.handleSubmit(this.state);
    this.setState(this.initialState);
  }

  render()
  {
    return (
      <InputGroup className="mb-3">
        <InputGroup.Prepend>

          <InputGroup.Text id="basic-addon1">...</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          placeholder="Escribe algo aquí..."
          aria-label="Input"
          aria-describedby="basic-addon1"
          onChange={this.handleChange}
        />
        <Button 
          variant="primary" 
          type="submit" 
          onClick={this.submitMsg}
          >Enviar</Button>
      </InputGroup>
    )
  }
}

export default ChatInput