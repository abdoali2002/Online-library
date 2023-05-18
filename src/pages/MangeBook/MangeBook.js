import React from "react";
import { Table,Alert,Form,Button } from "react-bootstrap"
import { Link } from "react-router-dom";
const MangeBook = () => {
    return ( 
        <div className="mange-book p-5">
          <div className="header d-flex justify-content-between mb-3">
         <h3 className="text-center ">MangeBook </h3>
         <Link to={"add"} className="btn btn-success">Add New Book </Link>
         </div>
         {/* Filter*/}
    <Form className="mb-3">
    <h4>Filter books</h4>
      <Form.Group className="mb-3 d-flex p-right-3rem p-left-3rem rounded-0">
        <Form.Control type="text " placeholder="Enter ISBN" />
        <Form.Control type="text mx-3" placeholder="Enter Reck NO." />
      <Button className='btn btn-dark w-30 ' variant="primary" type="submit">
        Submit
      </Button>
      </Form.Group>
    </Form>
         <Table striped bordered hover >
      <thead>
        <tr>
          <th>ID</th>
          <th>Image</th>
          <th>Title</th>
          <th>Auther</th>
          <th>Caregory</th>
          <th>ISBN</th>
          <th>Rock NO.</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td><img  src="https://picsum.photos/60/60"/></td>
          <td>The Skin and Its Girl' </td>
          <td>Ilana Masad </td>
          <td>Novel </td>
          <td>100</td>
          <td>02 </td>
          <td>
            <button className="btn btn-sm btn-danger">Delete</button>
            <Link to={"1"} className="btn btn-sm btn-primary mx-2">Update</Link>
            <Link to={"/1"} className="btn btn-sm btn-info">Show</Link>
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
 
export default MangeBook;