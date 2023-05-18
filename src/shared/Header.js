import '../style/Header.css';
import {Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import image from '../assets/image/pngegg(6).png';
const Header = ()=>{
    const Logout =()=> {

    }
    return <div>
        <Navbar bg="dark" variant="dark">
        <Container>
        <div className="e-auto">
                <img src={image} alt="logo" width="60" height="60"  />
        </div>
          <Navbar.Brand >
          <Link className="nav-link" to={`Books`}>
            Z library
            </Link>
            </Navbar.Brand>
          <Nav className="me-auto">
          <Link className="nav-link" to={`Register`}>Register</Link>
          <Link className="nav-link" to={`Books`}>Books</Link>
          <Link className="nav-link" to={`User`}>User</Link>
          <Link className="nav-link" to={`MangeBook`}>MangeBook</Link>
          <Link className="nav-link" to={`BorrowBook`}>BorrowBook</Link>

          </Nav>
          <Nav className="ms-auto">
            <Link className="nav-link" to={`Login`}>Logout</Link>
            </Nav>
        </Container>
      </Navbar>
    </div>        
}

export default Header;