import React from 'react';
import PropTypes from 'prop-types';
import CurrencyFormat from 'react-currency-format';
import { CURRENCY_PREFIX } from '../constants';

const MoneyFormat = (props) => {
  return (

      <CurrencyFormat value={parseFloat(props.value).toFixed(2)}
                      displayType={props.displayType}
                      thousandSeparator={props.thousandSeparator}
                      prefix={props.prefix}/>

  );
};
MoneyFormat.propTypes = {
  value: PropTypes.number.isRequired,
  displayType: PropTypes.any.isRequired,
  thousandSeparator: PropTypes.bool,
  prefix: PropTypes.string.isRequired
};
MoneyFormat.defaultProps = {
  displayType: 'text',
  thousandSeparator: true,
  prefix: CURRENCY_PREFIX.THAI_BATH
};
export default MoneyFormat;


