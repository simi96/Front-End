import React from 'react'
import { Card } from 'react-bootstrap'
import './index.css'

const CardComponent = (props) => {
  const { batchDetails} = props
  return (
    <>
  {batchDetails.map(item => {
  return (
    <span>
  <Card className='card-price'>
  <Card.Img variant="top" src={item.src} />
  <Card.Body>
    <Card.Title className='card-title'>{item.title}</Card.Title>
    <Card.Text className='dj-text'>
     {item.value}
    </Card.Text>
    <Card.Text className='price'>
     {item.price}
    </Card.Text>
  </Card.Body>
</Card>
</span>
  )})}
  </>
  )
}

export default CardComponent
