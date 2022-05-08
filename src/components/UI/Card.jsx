import React from 'react';
import './Card.scss';

const Card = props => {
    // To make classes work in other components 
  const classes = 'card ' + props.className;
  return (
    //   In order to make a wrapper component we need to use props.children
    <div className={classes}>{props.children}</div>
  );
};

export default Card;
