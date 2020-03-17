import React from 'react';
import PropTypes from 'prop-types';


const Card = ({id, name, email}) => {
    return (
        <div id={id}  className="bg-light-green dib br3 pa3 ma2 grow">
            <img role="presentation" alt="robot avatar" src={`//robohash.org/${id}?size=200x200`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

Card.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired
};

export default Card;