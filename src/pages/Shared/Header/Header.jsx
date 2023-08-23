import React from 'react';
import logo from '../../../assets/logo.png'
import moment from 'moment';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Marquee from "react-fast-marquee";





const Header = () => {
    
    return (
        <Container className='mt-5'>
            <div className='text-center'>
                <img src={logo} alt="" />
                <p className='text-secondary'><small>Journalism Without Fear or Favor</small></p>
                <p>{moment().format("dddd, MMMM D YYYY")}</p>
            </div>
            <div className='d-flex bg-body-tertiary p-3 my-4'>
                <Button variant="danger">Latest</Button>
                <Marquee className='' speed={60}>
                        I can be a React component, multiple React components, or just some text...
                </Marquee>
            </div>
            
        </Container>
    );
};

export default Header;