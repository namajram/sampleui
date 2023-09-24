import React, { useEffect, useState } from 'react';

function UserView() {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
    fetch('/api/users')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setUserData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h2>User Data</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {userData.map((user) => (
            <li key={user.id}>
              <strong>Name:</strong> {user.name}
              <br />
              <strong>Email:</strong> {user.email}
              <br />
              <strong>Mobile Number:</strong> {user.mobileNumber}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default UserView;
