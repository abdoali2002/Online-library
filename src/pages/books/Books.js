import React from 'react'
import BCard from './component/BCard'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const Books = () => {
  return (
    <div className='Books-container p-4'> 
    {/* Filter*/}
    <Form>
    <h2>Filter books</h2>
      <Form.Group className="mb-3 d-flex p-right-3rem p-left-3rem rounded-0">
        <Form.Control type="text mr-3" placeholder="Enter ISBN" />
        <Form.Control type="text mr-3" placeholder="Enter Reck NO." />
      <Button className='btn btn-dark w-30 ' variant="primary" type="submit">
        Submit
      </Button>
      </Form.Group>
    </Form>
    
    
    
    
    
    
    
    
    
    {/* book list*/}
    <div className="row ">
      <div className="col-3 card-book-container">
      < BCard/>
      </div>

      <div className="col-3 card-book-container">
      < BCard/>
      </div>

      <div className="col-3 card-book-container">
      < BCard/>
      </div>

      <div className="col-3 card-book-container">
      < BCard/>
      </div>   
    </div>
    </div>
  )
}

export default Books