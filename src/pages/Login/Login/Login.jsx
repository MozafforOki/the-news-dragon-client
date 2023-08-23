import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import { useContext } from 'react';
import { toast } from 'react-toastify';

const Login = () => {
    const {login} = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation()

    const from = location.state?.from.pathname || '/category/0'

    const handleSubmit = event =>{
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password)

        login(email,password)
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser)
            form.reset()
            toast.success('Successfully login!')
            navigate(from,{replace:true})
        })
        .catch(error =>{
            toast.error(error.message)
        })
 

    }
    return (
        <Container className='mx-auto border p-4 rounded' style={{ width: '30rem' }}>
            <h1 className='mb-4 text-center'>Please Login</h1>
            <hr></hr>
            <Form onSubmit={handleSubmit} className='mt-4'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className='fw-bold'>Email address</Form.Label>
                    <Form.Control className='bg-body-secondary' type="email" name='email' placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className='fw-bold'>Password</Form.Label>
                    <Form.Control className='bg-body-secondary' type="password" name='password' placeholder="Password" />
                </Form.Group>

                <Button className='mb-2 fw-semibold"' style={{ width: '100%' }}  variant="primary" type="submit">
                    Login
                </Button>
                <br></br>
                <Form.Text className='text-secondary'>
                    Don't Have an Account? <Link to="/register">Register</Link>
                </Form.Text>
                
            </Form>
        </Container>
    );
};

export default Login;