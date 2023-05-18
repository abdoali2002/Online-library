import React from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button';


const BCard= () => {
    return ( 
        <div >
            <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://picsum.photos/200/300" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Title:</ListGroup.Item>
        <ListGroup.Item>Auther:</ListGroup.Item>
        <ListGroup.Item>Category:</ListGroup.Item>
        <ListGroup.Item>ISBN:</ListGroup.Item>
        <ListGroup.Item>Rocknumber:</ListGroup.Item>
      </ListGroup>
      <Card.Body>
      <Button type="button" className='btn btn-dark w-100 h-90' variant="primary">
      Show Book
        </Button>
        <br/>
        <br/>
      <Button type="button" className='btn btn-dark w-100 h-90' variant="primary" >
      Author
       </Button>
      </Card.Body>
    </Card>
        </div>
     );
}
 
export default BCard;



