import React from 'react';
import { useSelector } from 'react-redux';
import './MyProfile.module.css';

const MyProfile = () => {
  const missionState = useSelector((state) => state.missionSlice);
  const rocketState = useSelector((state) => state.rockets);

  // Filter reserved rockets
  const reservedRockets = rocketState.rockets.filter((rocket) => rocket.reserved);

  // Filter joined missions
  const joinedMissions = missionState.data.filter((mission) => mission.reserved);

  return (
    <>
      {missionState.isLoading ? (
        <h1>Loading ...</h1>
      ) : (
        <div className="profile-container">
          <span>
            <h1 className="profile-head">My Mission</h1>
            <ul>
              {joinedMissions.map((current) => (
                <li className="myProfile-items" key={current.mission_id}>
                  {current.mission_name}
                </li>
              ))}
            </ul>
          </span>
          <span>
            <h1 className="profile-head">My Rockets</h1>
            <ul>
              {reservedRockets.map((current) => (
                <li className="myProfile-items" key={current.id}>
                  {current.name}
                </li>
              ))}
            </ul>
          </span>
        </div>
      )}
    </>
  );
};

export default MyProfile;
