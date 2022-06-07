import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import Col  from "react-bootstrap/Col";
import { Link } from "react-router-dom";

const nosotros = [
  {
    title: "Quiénes somos",
    path: "nosotros/quienes-somos",
  },
  {
    title: "Estructura",
    path: "nosotros/estructura",
  },
  {
    title: "Agentes asociados",
    path: "nosotros/agentes-asociados",
  },
  {
    title: "Reseña histórica",
    path: "nosotros/resena-historica",
  },
  {
    title: "Ética",
    path: "nosotros/etica",
  },
];

const informes = [
  {
    title: "Gerencia de Administración",
    path: "informes/administracion",
  },
  {
    title: "Gerencia de Operaciones",
    path: "informes/operaciones",
  },
  {
    title: "Gerencia Comercial",
    path: "informes/comercial",
  },
];

const Dropdown = ({ items }) => {
  return items.map((item) => (
    <NavDropdown.Item
      as={Link}
      to={item.path}
      key={item.title.toLowerCase().split(" ").join("-")}
    >
      {item.title}
    </NavDropdown.Item>
  ));
};

export default function Navigation() {
  return (
    <Navbar
      expand="lg"
      bg="light"
      style={{ boxShadow: "0px 4px 20px 0px rgba(0,0,0,0.3)", marginBottom: "20px" }}
    >
      <Container>
        <Col>
          <Navbar.Brand
            href="/"
            style={{ width: "10%", padding: 0, marginRight: "64px" }}
          >
            <img
              src="../logo.png"
              style={{ width: "auto", maxHeight: "110px" }}
              alt="logo oc-seni"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        </Col>
        <Col xs={3}></Col>
        <Col>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">
                Inicio
              </Nav.Link>
              <Nav.Link as={Link} to="/unifilar">
                SENI
              </Nav.Link>
              <Nav.Link as={Link} to="/contacto">
                Contacto
              </Nav.Link>
              <Nav.Link as={Link} to="/normativa">
                Normativa
              </Nav.Link>
              <NavDropdown title="Nosotros">
                <Dropdown items={nosotros} />
              </NavDropdown>
              <NavDropdown title="Informes">
                <Dropdown items={informes} />
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Col>
      </Container>
    </Navbar>
  );
}
