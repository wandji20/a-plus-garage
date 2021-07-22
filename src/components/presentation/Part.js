import React from 'react';
import PropTypes from 'prop-types';

const Part = (props) => {
  const { part } = props;
  console.log(part);
  return (
    <article className="part d-flex my-3 align-items-center">
      <img className="img" src={part.url} alt={part.name} />
      <div className="">
        { part.name }
      </div>
    </article>
  );
};

Part.propTypes = {
  part: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Part;
