import React, { Component } from 'react'

import {FormControl, Button, Form} from 'react-bootstrap';

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
    const { name,age,enjoys} = this.state.form;
    return (
      <div>
        <Form onSubmit={()=>this.props.newCat(this.state.form)}>
        <FormControl 
          type="text"
          name="name"
          onChange={this.handleChange}
          value={name}
        />
        <FormControl 
          type="text"
          name="age"
          onChange={this.handleChange}
          value={age}
        />
        <FormControl 
          type="text"
          name="enjoys"
          onChange={this.handleChange}
          value={enjoys}
        />
        <Button type="submit">Create Cat Profile</Button>
        </Form>
      </div>
    )
  }
}

export default NewCat;
