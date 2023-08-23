import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle,FaGithub,FaFacebook,FaTwitter,FaInstagram} from 'react-icons/fa';
import QZone from '../QZone/QZone';

const RightNav = () => {
    return (
        <div>
            <h4>Login With</h4>
            <Button variant="outline-primary" className='mb-2 w-100'><FaGoogle></FaGoogle> Login with Google</Button>
            <Button className='w-100' variant="outline-secondary"><FaGithub/> Login with Github</Button>
            <div className='my-4'>
                <h4>Find Us On</h4>
                <ListGroup>
                    <ListGroup.Item><FaFacebook className='text-primary'></FaFacebook> Facebook</ListGroup.Item>
                    <ListGroup.Item><FaTwitter className='text-primary'></FaTwitter> Twitter</ListGroup.Item>
                    <ListGroup.Item><FaInstagram className='text-danger'></FaInstagram> Instagram</ListGroup.Item>
                </ListGroup>
            </div>
            <QZone></QZone>
            
        </div>
    );
};

export default RightNav;