import React, { Component } from 'react'

import {FormControl,FormLabel, FormGroup, Button,Form,Row} from 'react-bootstrap';

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
      <div className="container">
      <Form onSubmit={()=>this.props.newCat(this.state.form)}>
          <FormGroup>
              <FormLabel id="name">Name</FormLabel>
              <FormControl 
                type="text"
                name="name"
                onChange={this.handleChange}
                value={name}
              />
            </FormGroup>
          <FormGroup>
              <FormLabel id="age">Age</FormLabel>
              <FormControl 
                type="text"
                name="age"
                onChange={this.handleChange}
                value={age}
              />
            </FormGroup>
          <FormGroup>
              <FormLabel id="age">Enjoys</FormLabel>
              <FormControl 
                type="text"
                name="enjoys"
                onChange={this.handleChange}
                value={enjoys}
              />
            </FormGroup>
          </Form>
        <Button type="submit">Create New Cat</Button>
      </div>
    )
  }
}

export default NewCat;
