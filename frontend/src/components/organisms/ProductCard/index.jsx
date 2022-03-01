import React from 'react';
import MoneyFormat from 'core/utils/MoneyFormat';
import Text from 'components/atoms/Text';
import { Badge, Button, Card } from 'react-bootstrap';
import { formatDate } from 'core/utils/formatDate';
//stock calculator
const Stock = ({ value }) => {
  return (
    <>
      <Badge bg={value === 0 ? 'danger':'success'}>
      {value === 0 ? <span className="text-center">Not Available</span> : <span
        className="text-center"><i className="fa fa-check-circle" aria-hidden="true"></i> In Stock {value}</span>}
      </Badge>
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
    <Card>
      <Card.Img variant="top" src={props.robot.image}/>
      <Card.Body>
        <Card.Title className="text-center"> {props.robot.name}</Card.Title>
        <Card.Text className="text-center m-0">
          {props.robot.material}
        </Card.Text>
        <Card.Text className="text-center fw-light">
       Created date -    <CreatedDate  date={props.robot.createdAt}/>
        </Card.Text>

          <Stock value={props.robot.stock}/>
        <h4 className="text-center mb-2">
          <MoneyFormat value={parseFloat(props.robot.price)}/>
        </h4>
        <Button size="md" variant="primary" className="btn-block" disabled={props.robot.stock === 0}
                onClick={props.addToCart}><i className="fa fa-cart-plus" aria-hidden="true"></i> Add to cart</Button>
      </Card.Body>
    </Card>
  );
};
export default ProductCard;
