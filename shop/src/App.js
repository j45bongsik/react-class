import React, { useState } from 'react';
import { Navbar, Container, Nav, NavDropdown, Button, Jumbotron } from 'react-bootstrap';
import './App.css';
import Data from './data.js';
import Detail from './Detail.js';

import { Link, Route, Switch } from 'react-router-dom';


function App() {

  let [shoes, shoesChage] = useState(Data);

  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/detail">Detail</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Switch>

        <Route exact path="./">
          <Jumbotron className="bg">
            <h1>20% Season Off</h1>
            <p>
              This is a simple hero unit, a simple jumbotron-style component for calling
              extra attention to featured content or information.
            </p>
            <p>
              <Button variant="primary">Learn more</Button>
            </p>
          </Jumbotron>
          <div className="container">
            <div className="row">
              {
                shoes.map(function(param, idx){
                  return (
                    <Card shoes={shoes[idx]} idx={idx} key={idx} />
                    )
                })
              }

            </div>
          </div>
        </Route>

        <Route path="./detail/:id">
          <Detail shoes={shoes}/>
        </Route>

        <Route path="./:id">
          <div>/:id 일때</div>
        </Route>

      </Switch>
      
    </div>
  );
}

function Card(props){
  return (
    <div className="col-md-4">
      <img src={ props.shoes.image } width="100%" alt="" />
      <img src={'https://codingapple1.github.io/shop/shoes'+ (props.idx + 1) +'.jpg'} width="100%" alt="" />
      <h4> { props.shoes.title } </h4>
      <p> { props.shoes.content } & { props.shoes.price } </p>
    </div>
  )
}


export default App;
