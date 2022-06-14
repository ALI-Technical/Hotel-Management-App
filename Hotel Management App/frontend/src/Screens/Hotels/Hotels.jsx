import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Card, Col, Row } from 'react-bootstrap'

const Hotels = () => {

    const [dataObj, setDataObj] = useState([]);
    const [getToggle, setGetToggle] = useState(false);

    useEffect(() => {
        // get api
        axios
          .get(`http://localhost:5000/api/hotels`)
          .then((res) => {
            setDataObj(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      }, [getToggle]);



  return (
    <>
      <h1 className='text-center'>Hotels</h1>
      <br />
      <br />
      <br />
      <br />
      <Row xs={1} sm={2} md={3} className="g-4 m-0">
  {dataObj.map((value) => (
    <Col id={value._id} key={value._id}>
      <Card>
        <Card.Img variant="top" src="https://source.unsplash.com/600x700/?hotels" />
        <Card.Body>
          <Card.Title>{value.hotel_name}</Card.Title>
          <Card.Text>
            {value.hotel_city}
            <span style={{display: 'block'}}>{value.hotel_rent}</span>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  ))}
</Row>
    </>
  )
}

export default Hotels
