import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const ResponsiveNavbar=()=> {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">ACCA</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
          <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#whyChooseUs">why choose us</Nav.Link>
            <Nav.Link href="#coursePlan">Course Plan</Nav.Link>
            <Nav.Link href="#placementAssistance">Placement Assistance</Nav.Link>
            <Nav.Link href="#accaJourney">Acca Journey</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default ResponsiveNavbar;