import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import "../../style/Login.css";
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className='login-container'>
      <h1>Regsiteration</h1>
      <Form>
      <Form.Group className="mb-3 mt-3">
      <Form.Label>Name:</Form.Label>
        <Form.Control type="email" placeholder="please your enter name" />
       
      </Form.Group>
      <Form.Group className="mb-3 " controlId="formBasicEmail">
      <Form.Label>Email:</Form.Label>
        <Form.Control type="email" placeholder="please your enter email" />
       
      </Form.Group>

      <Form.Group className="mb-3 " controlId="formBasicPassword">
        <Form.Label>Password:</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3 " controlId="formBasicEmail">
      <Form.Label>Phone:</Form.Label>
        <Form.Control type="email" placeholder="please your enter phone" />
       
      </Form.Group>
      <Form.Group className="mb-3 " >
        <Form.Label htmlFor="Able" bsPrefix='pla'>Please choose type</Form.Label>
        <Form.Select abled>
         <option>User</option>
         <option>Librarian</option>
          
        </Form.Select>
      </Form.Group>
      
      
      
      <Button className='btn btn-dark w-100' variant="primary" type="submit">
      <Link className="nav-link" to={`Login`}>Login</Link>
        
      </Button>
      <Alert variant='danger' className='p-2'>
          This is a {} alert—check it out!
        </Alert>
        <Alert variant='success' className='p-2'>
          This is a {} alert—check it out!
        </Alert>
    </Form>

    
      
    </div>
  )
}

export default Register