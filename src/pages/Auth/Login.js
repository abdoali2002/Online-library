import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import "../../style/Login.css";
import { Link } from 'react-router-dom';


const Login = () => {
  return (
    <div className='login-container'>
      <h1>Login</h1>
      <Form>
      <Form.Group className="mb-3 " controlId="formBasicEmail">
      <Form.Label>Email:</Form.Label>
        <Form.Control type="email" placeholder="please your enter email" />
       
      </Form.Group>

      <Form.Group className="mb-3 " controlId="formBasicPassword">
        <Form.Label>Password:</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3 " >
        <Form.Label htmlFor="Able" bsPrefix='pla'>Please choose</Form.Label>
        <Form.Select abled>
          <option>User</option>
          <option>Librarian</option>
        </Form.Select>
      </Form.Group>
      
      <Button className='btn btn-dark w-100' variant="primary" type="submit">
        Login
      </Button>
      <Form.Text className="text-muted">
          If you dont have account ,please regsiter for new account. 
        </Form.Text>
      <Button className='btn btn-dark w-100' variant="primary" type="submit">
      <Link className="nav-link" to={`Register`}>Register</Link>
        
      </Button>
      <Alert variant='danger' className='p-2'>
          This is a {} alert—check it out!
        </Alert>
    </Form>

    
      
    </div>
  )
}

export default Login