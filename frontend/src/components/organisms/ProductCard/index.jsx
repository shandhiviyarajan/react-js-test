import React from 'react';
import MoneyFormat from 'core/utils/MoneyFormat';
import Text from 'components/atoms/Text';
import { Button, Card } from 'react-bootstrap';
import { formatDate } from 'core/utils/formatDate';
//stock calculator
const Stock = ({ value }) => {
  return (
    <>
      {value === 0 ? <Text className="text-center" style={{ color: 'red' }}>Not Available</Text> : <Text
        className="text-center">Available - {value}</Text>}
    </>
  );
};
//created date
const CreatedDate = (props) => {
  return (
    <>
      {formatDate(props.date)}
    </>
  );
};
//product card
const ProductCard = (props) => {
  return (
    <Card className="rounded-3" {...props}>
      <Card.Img variant="top" src={props.robot.image}/>
      <Card.Body>
        <Card.Title> {props.robot.name}</Card.Title>
        <Card.Text>
          {props.robot.material}
          <CreatedDate date={props.robot.createdAt}/>
        </Card.Text>
        <Stock value={props.robot.stock}/>
        <h3 className="text-center">
          <MoneyFormat value={parseFloat(props.robot.price)}/>
        </h3>
        <Button size="lg" variant="primary" className="btn-block" disabled={props.robot.stock === 0}
                onClick={props.addToCart}>Add to cart</Button>
      </Card.Body>
    </Card>
  );
};
export default ProductCard;
