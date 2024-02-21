import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import CartWidget from "./Market/CartWidget";
import { Link, NavLink } from "react-router-dom";

function NavScroll() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand as = {Link} to="/">ASTROMarket</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link as = {Link}  to="/">Home</Nav.Link>
            <Nav.Link as = {Link}  to="/Productos">Productos</Nav.Link>
            <Nav.Link as = {Link}  to="/Peliculas">Peliculas</Nav.Link>
            <NavDropdown title="Productos" id="navbarScrollingDropdown">
              <NavDropdown.Item as = {Link}  to="/Category/Bebidas">Bebidas</NavDropdown.Item>
              <NavDropdown.Item as = {Link}  to="/Category/Alimentos">Alimentos</NavDropdown.Item>
              <NavDropdown.Item as = {Link}  to="#">
                Categoria 3
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Especiales
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Button variant="outline-light">Buscar</Button>
            <Form.Control
              type="search"
              placeholder="Buscar"
              className="me-2"
              aria-label="Search"
            />
          </Form>
          <CartWidget/>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScroll;
