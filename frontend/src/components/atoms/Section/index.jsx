import React from 'react';

const Section = (props) => {
  return (<section {...props}>
    {props.children}
  </section>);
};
export default Section;
