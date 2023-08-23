import React from 'react';
import { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import { toast } from 'react-toastify';
import { useState } from 'react';

const Register = () => {
    const [error,setError] = useState(null)
    const [accepted,setAccepted] = useState(false)
    const {createUser,userProfile,verifyEmail } = useContext(AuthContext)

    const handleSubmit = event =>{
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        const accept = form.accept.value;

          //---------password validation----------
        if(password.length < 6 ){
            setError('Password should be at least 6 characters or more.')
            return;
       }

       if(!/(?=.*[a-zA-Z >>!#$%&? "<<])[a-zA-Z0-9 >>!#$%&?<< ]/.test(password)){
           setError('Please provide at least one special character.')
           return;
       }

       //create user
        createUser(email,password)
        .then(result =>{
            const createdUser = result.user;
            console.log(createdUser)
            form.reset()
            toast.success('Account Created')

            // 1.
            userProfile(name,photo)
            .then(() =>{
                toast.success('Name Updated')

                //2.
                verifyEmail()
                .then(() =>{
                    toast.success(' Email verification sent! Please check your email.')
                })
                .catch(error => toast.error(error.message))
            })
            .catch(error =>{
                toast.error(error.message)
            })

        })
        .catch(error =>{
            console.error(error)
        })

        console.log(name,photo,email,password,accept) 

    }
    return (
        <Container className='border p-5 mb-5 mx-auto rounded' style={{ width: '35rem' }}>
            <h1 className='mb-4 text-center'>Register your account</h1>
            <hr></hr>
            <Form onSubmit={handleSubmit} className='mt-4'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className='fw-bold'>Your Name</Form.Label>
                    <Form.Control className='bg-body-secondary' type="text" name='name' placeholder="Enter your name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className='fw-bold'>Photo URL</Form.Label>
                    <Form.Control className='bg-body-secondary' type="text" name='photo' placeholder="Enter your password" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className='fw-bold'>Email address</Form.Label>
                    <Form.Control className='bg-body-secondary' type="email" name='email' placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className='fw-bold'>Password</Form.Label>
                    <Form.Control className='bg-body-secondary' type="password" name='password' placeholder="Password" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check 
                    onClick={event => setAccepted(event.target.checked)}
                    type="checkbox"
                    name='accept'
                    label={<>Accept <Link to="/terms">Term & Conditions</Link></>} />
                </Form.Group>

                <Button disabled={!accepted} className='mb-2 fw-semibold"' style={{ width: '100%' }} variant="primary" type="submit">
                    Register
                </Button>
                <br></br>
                <Form.Text className='text-secondary'>
                    Already Have an Account? <Link to="/login">Login</Link>
                </Form.Text>
                <Form.Text className='text-danger'>
                    {error}
                </Form.Text>
                
            </Form>
        </Container>
    );
};

export default Register;