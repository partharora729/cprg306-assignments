
import React from 'react';

const Item = ({ name, quantity, category }) => {
  return (
    <div>
    <li className="flex items-center bg-purple-950 p-2 my-3 ">
      <div>
        <h3 className="text-xl font-bold">{name}</h3>
        <p className="text-sm"> Buy {quantity} in {category}</p>
      </div>
    </li>
    </div>
  );
};

export default Item;
