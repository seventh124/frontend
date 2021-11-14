import React from 'react';
import { Container, Form, FormControl, Button, Nav, Navbar } from 'react-bootstrap';


const Navigation = () => {
    return (
        <div>
          <Navbar bg="light" expand="lg" color="red">
            <Container fluid>
              <Navbar.Brand href="#">BitApp</Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                <Nav
                  className="me-auto my-2 my-lg-0"
                  style={{ maxHeight: '100px' }}
                  navbarScroll
                >
                  <Nav.Link href="#action1">Agregar Venta</Nav.Link>
                  <Nav.Link href="#action2">Mis Ventas</Nav.Link>
                  <Nav.Link href="#action2">Productos</Nav.Link>
                  <Nav.Link href="#action2">Vendedores</Nav.Link>
                  <Nav.Link href="#action2">Perfil</Nav.Link>
                </Nav>
                <Form className="d-flex">
                  <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
    );
};


export default Navigation;  