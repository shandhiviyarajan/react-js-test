import React from 'react';
import Text from 'components/atoms/Text';
import { Button, Image } from 'react-bootstrap';
import MoneyFormat from 'core/utils/MoneyFormat';

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
        <Text>{item.name} <br/> <span className="fs-6 fw-light">{item.price}</span> </Text>
      </td>

      <td>
        <Text>{item.qty}</Text>
      </td>

      <td>
        <Button size='sm' onClick={() => reduceItem(item)}>-</Button>
      </td>
      <td>
        <Button size='sm' onClick={() => increaseItem(item)}>+</Button>
      </td>

      <td>
        <Button variant="danger" size='sm' onClick={() => removeItem(item)}>Remove</Button>
      </td>
    </tr>
  );
};
/**
 * Cart dropdown
 */
const CartDropdown = ({ cart, removeItem, reduceItem, increaseItem, total, checkOut }) => {
  return (
    <>
      <table>
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
        </tbody>
      </table>
      <MoneyFormat value={total}/>
      <Button onClick={checkOut}> Check out</Button>
    </>
  );
};
export default CartDropdown;
