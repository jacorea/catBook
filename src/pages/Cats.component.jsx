import React, { Component } from 'react'
import {
    Col, Container, Row, ListGroup, ListGroupItem
} from 'react-bootstrap';

export class Cats extends Component {
  render() {
    return (
      <div>
        <Container>
            <Row>
                <Col xs={12}>
                    <ListGroup>
                    {this.props.cats.map((cat,index)=> {
                        return (
                            <ListGroupItem key={index}>
                                <h4>
                                    <span className="cat-name">{cat.name}</span> - <small className="cat-age"> {cat.age} years old</small>
                                </h4>
                                <span className="cat-enjoys">{cat.enjoys}</span>
                            </ListGroupItem>
                        )
                    })}
                    </ListGroup>
                </Col>
            </Row>
        </Container>
      </div>
    )
  }
}

export default Cats;
