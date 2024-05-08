import React from 'react';
import { highlightText } from '../utils/searchUtils';

const UserCard = ({ user, searchTerm, active }) => {
  const activeClass = active ? 'user-card active' : 'user-card';

  return (
    <div className={activeClass}>
      <div>{highlightText(user.name, searchTerm)}</div>
      <div>{highlightText(user.address, searchTerm)}</div>
      {user.items.some(item => item.toLowerCase().includes(searchTerm.toLowerCase())) &&
        <div className="item-found">{`${searchTerm} found in items`}</div>}
      <div>{user.items.map(item => <div key={item}>{highlightText(item, searchTerm)}</div>)}</div>
      <div>{highlightText(user.pincode, searchTerm)}</div>
    </div>
  );
};

export default UserCard;
