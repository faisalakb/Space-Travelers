import '@testing-library/react';
import missionReducer, {
  initialState,
  joinMissionReducer,
  fetchMission,
} from '../redux/missionSlice/Mission';

describe('missionSlice', () => {
  it('should return the initial state', () => {
    const nextState = missionReducer(undefined, {});
    expect(nextState).toEqual(initialState);
  });

  it('should handle joinMissionReducer', () => {
    const initialStateWithData = {
      data: [
        { mission_id: '1', reserved: false },
        { mission_id: '2', reserved: false },
      ],
    };
    const nextState = missionReducer(
      initialStateWithData,
      joinMissionReducer({ missionIdToJoin: '1', reserved: false }),
    );
    expect(nextState.data[0].reserved).toBe(true);
    expect(nextState.data[1].reserved).toBe(false);
  });

  it('should handle fetchMission.pending', () => {
    const nextState = missionReducer(undefined, fetchMission.pending);
    expect(nextState.isLoading).toBe(true);
  });

  it('should handle fetchMission.fulfilled', () => {
    const missionData = [
      { mission_id: '1', mission_name: 'Mission 1' },
      { mission_id: '2', mission_name: 'Mission 2' },
    ];
    const nextState = missionReducer(
      undefined,
      fetchMission.fulfilled(missionData),
    );
    expect(nextState.isLoading).toBe(false);
    expect(nextState.data).toEqual(missionData);
  });

  it('should handle fetchMission.rejected', () => {
    const nextState = missionReducer(undefined, fetchMission.rejected);
    expect(nextState.isLoading).toBe(false);
    expect(nextState.isError).toBe(true);
  });
});
