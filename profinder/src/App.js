import React, { useState, useEffect } from 'react';
import SearchInput from './components/SearchInput';
import UserCard from './components/UserCard';
import NoResultsCard from './components/NoResultsCard';

function App() {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeIndex] = useState(-1);

  useEffect(() => {
    fetch('https://fe-take-home-assignment.s3.us-east-2.amazonaws.com/Data.json')
      .then(response => response.json())
      .then(data => setUsers(data));
  }, []);

  const filteredUsers = users.filter(user => 
    user.id.includes(searchTerm) ||
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.pincode.includes(searchTerm) ||
    user.items.some(item => item.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div>
      <SearchInput value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
      <div className="results-container">
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user, index) => (
            <UserCard
              key={user.id}
              user={user}
              searchTerm={searchTerm}
              active={index === activeIndex}
            />
          ))
        ) : (
          <NoResultsCard />
        )}
      </div>
    </div>
  );
}

export default App;
