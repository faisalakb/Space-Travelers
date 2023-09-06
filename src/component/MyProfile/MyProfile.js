import React from 'react';
import { useSelector } from 'react-redux';
import './MyProfile.module.css';

const MyProfile = () => {
  const missionState = useSelector((state) => state.missionSlice);
  const rocketState = useSelector((state) => state.rockets);

  return (
    <>
      {missionState.isLoading ? (
        <h1>Loading ...</h1>
      ) : (
        <div className="profile-container">
          <span>
            <h1 className="profile-head">My Mission</h1>
            <ul>
              {rocketState.rockets.map((current) => {
                if (current.reserved) {
                  return (
                    <li className="myProfile-items" key={current.id}>
                      {current.name}
                    </li>
                  );
                }
                return null;
              })}
            </ul>
          </span>
          <span>
            <h1 className="profile-head">My Rockets</h1>
            <ul>
              {missionState.data.map((current) => {
                if (current.reserved) {
                  return (
                    <li className="myProfile-items" key={current.mission_id}>
                      {current.mission_name}
                    </li>
                  );
                }
                return null;
              })}
            </ul>
          </span>
        </div>
      )}
    </>
  );
};

export default MyProfile;
