import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "../../assets/styles/colors.css"
import logo from "../../assets/img/logo-removebg-preview.png"
import "./Navbar.css";

function NavBar() {
  return (
    <>
      <Navbar variant="dark" className='fixed-top bg-color-3'>
        <Container>
          <Navbar.Brand href="#home" className="">
            <img className="image" src={logo} alt="" />
          </Navbar.Brand>
          <Nav className="d-flex justify-content-center" >
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Sobre</Nav.Link>
            <Nav.Link href="#pricing">Contate-nos</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
