import { Outlet} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
//import NavDropdown from 'react-bootstrap/NavDropdown';
import styles from './LayoutComponent.module.scss';
import { LinkContainer } from 'react-router-bootstrap';
import Account from "../AccountTab/Account";
const Layout = () => {
  return (
    <>
        <div className={styles.layout}>
            <Navbar expand="lg" sticky="top" className="bg-body-tertiary">
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <LinkContainer to="/home">
                            <Nav.Link>Home</Nav.Link>
                        </LinkContainer>

                        <LinkContainer to="/subject">
                            <Nav.Link>Subject</Nav.Link>
                        </LinkContainer>
                        
                        <LinkContainer to="/uni">
                            <Nav.Link>University</Nav.Link>
                        </LinkContainer>

                        <LinkContainer to="/contacts">
                            <Nav.Link>Contacts</Nav.Link>
                        </LinkContainer>
                        </Nav>
                        <Nav className="ms-auto">
                        <LinkContainer to="/accounts" className={styles.right}>
                            <Nav.Link><Account/></Nav.Link>
                        </LinkContainer>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Outlet />
        </div>
        
    </>
  )
};

export default Layout;