import React, { useEffect, useMemo, useState } from 'react';
import CartDropdown from 'components/organisms/CartDropdown';
import ProductCard from 'components/organisms/ProductCard';
import DefaultLayout from 'components/templates/Default';
import { Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import {
  actionAddToStock,
  actionFetchRobots,
  actionReduceStock,
  actionRestoreStock
} from 'core/redux/actions/robotsAction';
import { actionAddToCart, actionIncrease, actionReduce } from 'core/redux/actions/cartActions';
import { Col, Container, Row } from 'react-bootstrap';
import PageTitle from '../../organisms/PageTitle';
import FilterBy from '../../organisms/FilterBy';

const Home = () => {
  const dispatch = useDispatch();
  /**
   * Fetch robots
   */
  const fetched_robots = useSelector(state => state.robots.products);
  useEffect(() => {
    dispatch(actionFetchRobots());
  }, []);
  const { data, isLoading } = fetched_robots;
  /**
   * Add to cart
   */
  const cart = useSelector(state => state.shopping.cart.data);
  const handleAddToCart = (robot) => {
    //add to cart only of stock available
    if (robot.stock > 0 && cart.length < 5) {
      //update stock
      dispatch(actionReduceStock(robot));
      //check the stock and item and add to cart
      const item = {
        name: robot.name,
        price: robot.price,
        stock: robot.stock,
        image: robot.image,
        qty: 1 //minimum 01
      };
      //check if item is available in cart and update the Qty
      if (cart.find(cartItems => cartItems.name === item.name)) {
        const cartItems = cart.map(cartItem => (
          cartItem.name === item.name ? {
            ...cartItem,
            qty: cartItem.qty + 1
          } : cartItem
        ));
        dispatch(actionAddToCart(cartItems));
      } else {
        dispatch(actionAddToCart([...cart, item]));
      }
    }
  };
  //handle increaseItems in cart
  const handleIncrease = (robot) => {
    dispatch(actionReduceStock(robot));
    //increase only if stock is available
    if (data.find(item => item.name === robot.name).stock > 0) {
      dispatch(actionIncrease(robot));
    }
  };
  //handle reduce items in cart
  const handleReduce = (robot) => {
    dispatch(actionReduce(robot));
    dispatch(actionAddToStock(robot));
  };
  /**
   * Total And Quantity calculations
   */
  let [qty, setQty] = useState(0);
  const [total, setTotal] = useState(0);
  const handlePrice = () => {
    let totalItems = 0;
    let totalValue = 0;
    cart.forEach(cartItem => {
      totalItems += parseInt(cartItem.qty);
      totalValue += parseFloat(cartItem.price) * parseInt(cartItem.qty);
    });
    setQty(totalItems);
    setTotal(totalValue);
  };
  useMemo(() => handlePrice(), [cart]);
  /**
   * Remove from cart
   */
  const handleRemoveFromCart = (robot) => {
    const filteredRobots = cart.filter(cartItem => cartItem.name !== robot.name);
    dispatch(actionAddToCart(filteredRobots));
    dispatch(actionRestoreStock(robot));
  };
  return (
    <DefaultLayout>
      <Container fluid>
        <Row>
          <Col md={9}>
            <Row className="justify-content-center my-4">
              <Col md={8}>
                <PageTitle/>
              </Col>
            </Row>

            <Row className="justify-content-center mb-4">
              <Col md={6}>
                <FilterBy/>
              </Col>
            </Row>
            <Row className="justify-content-center">
              {isLoading ? <Spinner animation="border" variant="primary" /> :
                data && data.map((robot, index) => (
                  <Col md={3}>
                    <ProductCard className="mb-4" addToCart={() => handleAddToCart(robot)} robot={robot}
                                 key={index + 'robot'}/>
                  </Col>
                ))
              }
            </Row>
          </Col>
          <Col md={3}>
            <CartDropdown cart={cart} total={total} qty={qty}
                          removeItem={(item) => handleRemoveFromCart(item)}
                          reduceItem={(item) => handleReduce(item)}
                          increaseItem={(item) => handleIncrease(item)}/>
          </Col>
        </Row>
      </Container>


    </DefaultLayout>
  );
};
export default Home;


