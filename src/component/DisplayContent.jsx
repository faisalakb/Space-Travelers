import { useDispatch, useSelector } from 'react-redux';
import { joinMissionReducer } from './Missions/Mission';

const DisplayContent = () => {
  const dispatch = useDispatch();
  const missionState = useSelector((state) => state.missionSlice);
  const joinMission = (mid, reserved) => {
    dispatch(joinMissionReducer({ missionIdToJoin: mid, reserved }));
  };

  return (
    <>
      {missionState.isLoading ? (
        <h1>Loading ...</h1>
      ) : (
        <div>
          <table>
            <thead>
              <tr>
                <th>Mission</th>
                <th>Description</th>
                <th>Status</th>
                <th>Empty</th>
              </tr>
            </thead>
            <tbody>
              {missionState.data.map((current) => (
                <tr key={current.mission_id}>
                  <td>{current.mission_name}</td>
                  <td>{current.description}</td>
                  <td><button type="button" className={current.reserved ? 'active-member-button' : 'not-a-member-button'}>{current.reserved ? 'Active Member' : 'Not a Member'}</button></td>
                  <td><button type="button" className={current.reserved ? 'join-mission' : 'not-join-mission'} onClick={() => { joinMission(current.mission_id, current.reserved); }}>{current.reserved ? 'Leave Mission' : 'Join Mission'}</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      )}
    </>
  );
};

export default DisplayContent;
