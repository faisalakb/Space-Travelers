import React from 'react';
import { useSelector } from 'react-redux';
import './MyProfile.module.css';

const MyProfile = () => {
  const rocketState = useSelector((state) => state.rockets);
  console.log(rocketState);

  return (
    <>
      {rocketState.isLoading ? (
        <h1>Loading ...</h1>
      ) : (
        <div>
          <h1>My Mission</h1>
          <ul>
            {rocketState.rockets.map((current) => (
              current.reserved ? (
                <li className="myProfile-items" key={current.id}>{current.name}</li>
              ) : null
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default MyProfile;
