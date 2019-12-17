import React, { Component } from 'react'

import {FormControl} from 'react-bootstrap';

export class NewCat extends Component {
  constructor(props) {
    super(props) 

    this.state = {
      form: {
        name: '',
        age: '',
        enjoys: ''
      }
    }
  }


  handleChange = (event) => {
    let { form } = this.state;
    form[event.target.name] = event.target.value;
    this.setState({form: form})
  }

  render() {
    return (
      <div>
        <FormControl 
          type="text"
          name="name"
          onChange={this.handleChange}
          value={this.state.form.name}
        />
        <FormControl 
          type="text"
          name="age"
          onChange={this.handleChange}
          value={this.state.form.age}
        />
        <FormControl 
          type="text"
          name="enjoys"
          onChange={this.handleChange}
          value={this.state.form.enjoys}
        />
      </div>
    )
  }
}

export default NewCat;
