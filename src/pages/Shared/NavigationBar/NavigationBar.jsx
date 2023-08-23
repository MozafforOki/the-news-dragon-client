import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import { useContext } from 'react';
import { FaUserCircle} from "react-icons/fa";
import { toast } from 'react-toastify';

const NavigationBar = () => {
    const {user,logOut} = useContext(AuthContext)

    const handleLogOut = () =>{
        logOut()
        .then(() => toast.success('Sign-out successful.'))
        .catch(error => toast.error(error.message))
    }
    return (
        <Container className='mb-5'>
                <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
                    
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto fs-5">
                        <Link to="/category/0">Home</Link>
                        <Nav.Link href="#pricing">About</Nav.Link>
                        <Nav.Link href="#pricing">Career</Nav.Link>
                        
                    </Nav>
                    <Nav>
                        {user && <Nav.Link href="#deets"><FaUserCircle className='fs-2'></FaUserCircle></Nav.Link>}
                        
                        {user? <Link><Button onClick={handleLogOut} variant="secondary">LogOut</Button></Link>
                        : <>
                            <Link className='me-3' to="/login"><Button variant="secondary">Login</Button></Link>
                            <Link to="/register"><Button variant="secondary">Register</Button></Link>
                        </>}
                    </Nav>
                    </Navbar.Collapse>
        
                </Navbar>
            </Container>
    );
};

export default NavigationBar;