import React from 'react';

const NoItem = ({ message }) => {
  return (
    <div className="d-flex justify-content-center">
      <span>{message || 'No items found'}</span>
    </div>
  );
};

export default NoItem;
