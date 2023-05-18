import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import { Link } from "react-router-dom";


const AddBook = () => {
    return ( 
      <div className='login-container'>
      <h1>Add New Book </h1>
      <Form>
      <Form.Group className="mb-3 mt-3">
      <Form.Label>ID:</Form.Label>
        <Form.Control type="text" placeholder="please enter book id " />
       
      </Form.Group>
      <Form.Group className="mb-3"> 
      <Form.Label>ID:</Form.Label>
      <input type="file" className="form-control" />
      </Form.Group>
      <Form.Group className="mb-3 " >
      <Form.Label>Title:</Form.Label>
        <Form.Control type="text" placeholder="please enter book title" />
       
      </Form.Group>

      <Form.Group className="mb-3 " >
        <Form.Label>Auther:</Form.Label>
        <Form.Control type="text" placeholder="please enter book auther" />
      </Form.Group>
      <Form.Group className="mb-3 " >
        <Form.Label htmlFor="Able" bsPrefix='pla'>Please choose catgory</Form.Label>
        <Form.Select abled>
          <option>Novel</option>
          <option>Store</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3 " >
      <Form.Label>Rock Number:</Form.Label>
        <Form.Control type="text" placeholder="please enter rock No. " />
       
      </Form.Group>
     
      <Button className='btn btn-dark w-100' variant="primary" type="submit">
      <Link className="nav-link" to={"Book"}>submit</Link>
        
      </Button>
      <Alert variant='danger' className='p-2'>
          This is a {} alert—check it out!
        </Alert>
        <Alert variant='success' className='p-2'>
          This is a {} alert—check it out!
        </Alert>
    </Form>

    
      
    </div>
     );
}
 
export default AddBook;