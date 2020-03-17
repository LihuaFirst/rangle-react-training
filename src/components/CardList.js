import React from "react";
import Card from "./Card";
import PropTypes from 'prop-types';

const CardList = ({robots}) => {
  const cardsArray = robots.map(robot => (
    <Card 
      id={robot.id}
      name={robot.name}
      email={robot.email} />
  ));
  return (
    <div>{cardsArray}</div>
  );
};

CardList.prototype = {
  robots: PropTypes.array.isRequired
}
export default CardList;