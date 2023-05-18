import React from "react";
import { Table,Alert } from "react-bootstrap"
const BorrowBook = () => {
    return ( 
        <div className="mange-book p-5">
          <div className="header d-flex justify-content-between mb-5">
         <h3 className="text-center ">Mange Borrow Book </h3>
         </div>
         <Table striped bordered hover >
      <thead>
        <tr>
          <th>ID</th>
          <th>Image</th>
          <th>Title</th>
          <th>User name</th>
          <th>state</th>
          <th>ISBN</th>
          <th>Rock NO.</th>
          <th>NO.Books</th>
          <th>Deadline</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td><img  src="https://picsum.photos/60/60"/></td>
          <td>The Skin and Its Girl' </td>
          <td>Mezo </td>
          <td>Active </td>
          <td>100</td>
          <td>02 </td>
          <td>02 </td>
          <td>02-03-2023 </td>
          <td>
          <button className="btn btn btn-success mx-2">Approve</button>
          <button className="btn btn btn-danger mx-2">Reject</button>
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
 
export default BorrowBook;