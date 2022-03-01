import React from 'react';
import Text from 'components/atoms/Text';
import { Alert, Badge, Button, Image } from 'react-bootstrap';
import MoneyFormat from 'core/utils/MoneyFormat';
import Box from 'components/atoms/Box';

/**
 * Cart items
 */
const CartItem = ({ item, removeItem, reduceItem, increaseItem }) => {
  return (
    <tr>
      <td>
        <Text>
          <Image src={item.image} width={50}/>
        </Text>
      </td>
      <td>
        <Text>{item.name} <br/> <span className="fs-6 fw-light">
          <MoneyFormat value={parseFloat(item.price)}/>
        </span> </Text>
      </td>

      <td>
        <Text>{item.qty}</Text>
      </td>
      <td>
          <MoneyFormat value={parseFloat(item.qty * item.price)}/>
      </td>

      <td>
        <Button size='sm' onClick={() => reduceItem(item)}>-</Button>
      </td>
      <td>
        <Button size='sm' onClick={() => increaseItem(item)}>+</Button>
      </td>

      <td>
        <Button variant="danger" size='sm' onClick={() => removeItem(item)}><i className="fa fa-trash-o"
                                                                               aria-hidden="true"></i></Button>
      </td>
    </tr>
  );
};
/**
 * Cart dropdown
 */
const CartDropdown = ({ cart, removeItem, reduceItem, increaseItem, total, qty,checkOut }) => {
  return (
    <>
      <Box className="p-4">
        <h4 className="my-4 d-flex justify-content-between">
         <Text className="cart-qty">
           <i className="fa fa-shopping-cart" aria-hidden="true"></i>
           <Badge pill  bg="secondary">{qty} </Badge>
         </Text> Shopping Cart
        </h4>
        {
          cart.length > 0 ?
            <table className="table table-striped">
              <tbody>
              {
                cart && cart.map((item, index) => (
                  <CartItem key={index + 'cart-items'}
                            item={item}
                            removeItem={removeItem}
                            reduceItem={reduceItem}
                            increaseItem={increaseItem}
                  />
                ))
              }
              <tr>

                <td colSpan="7">
                  <Box className="d-flex justify-content-between">
                    <Text className="text-end mb-0">
                      Cart Total
                    </Text>
                    <Text className="text-end mb-0">
                      <MoneyFormat value={total}/>
                    </Text>
                  </Box>
                </td>
              </tr>
              <tr>
                <td colSpan="7">
                  {
                    cart.length > 0 ?
                      <Button variant="success" size="md" className="btn-block" onClick={checkOut}> Check out</Button>
                      : ''
                  }

                </td>
              </tr>
              </tbody>
            </table>
            : <Alert variant="secondary">
              <Text className="fw-light mb-0">
                Your cart is empty
              </Text>
            </Alert>}
      </Box>
    </>
  );
};
export default CartDropdown;
