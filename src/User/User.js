import React from "react";
import { Table,Alert,Form } from "react-bootstrap"
import { Link } from "react-router-dom";
const User = () => {
    return ( 
        <div className="mange-book p-5">
          <div className="header d-flex justify-content-between mb-5">
         <h3 className="text-center ">Mange user </h3>
         </div>
         <Table striped bordered hover >
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Password</th>
          <th>Phone</th>
          <th>State</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mezo </td>
          <td>Mezo@gmail.com</td>
          <td>01062009773*****</td>
          <td>01062009773</td>
          <td>
          <Form.Group className="mb-3 " >
         <Form.Select abled>
        <option>Active</option>
        <option>In-active</option>
         </Form.Select>
         </Form.Group>
          </td>
          <td>
            <button className="btn btn btn-success ">Approve</button>
            <button className="btn btn btn-danger mx-2">Reject</button>
            <button className="btn btn btn-secondary ">Update</button>
        
         </td>
         
        </tr>
      </tbody>
    </Table>  
    <Alert variant='danger' className='p-2'>
          This is a {} alert—check it out!
        </Alert>
        <Alert variant='success' className='p-2'>
          This is a {} alert—check it out!
        </Alert>
        </div>
     );
}
 
export default User;