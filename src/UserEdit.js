import React, { useEffect, useState } from 'react';

function UserEdit({ match }) {
  const userId = match.params.userId; 
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
    fetch(`/api/users/${userId}`)
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
  }, [userId]);

  const handleEdit = async () => {
    try {
      const response = await fetch(`/api/users/update/${userId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
  
      if (response.ok) {
        alert('User data updated successfully');
      } else {
        alert('User data update failed');
      }
    } catch (error) {
      console.error('Error updating user data:', error);
    }
  };
  

  const handleInputChange = (e) => {
    const { name, value } = e.target;
   
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  return (
    <div>
      <h2>Edit User Data</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <form>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={userData.name || ''}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={userData.email || ''}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="mobileNumber">Mobile Number:</label>
            <input
              type="tel"
              id="mobileNumber"
              name="mobileNumber"
              value={userData.mobileNumber || ''}
              onChange={handleInputChange}
            />
          </div>
          <button type="button" onClick={handleEdit}>
            Save Changes
          </button>
        </form>
      )}
    </div>
  );
}

export default UserEdit;
