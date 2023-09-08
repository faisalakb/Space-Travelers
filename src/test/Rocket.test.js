import '@testing-library/react';
import rocketReducer, {
  initialState,
  reserveBooking,
  cancelBooking,
} from '../redux/rockets/rocketSlice';

describe('rocketSlice', () => {
  it('should return the initial state', () => {
    const nextState = rocketReducer(undefined, {});
    expect(nextState).toEqual(initialState);
  });

  it('should handle reserveBooking', () => {
    const initialStateWithRockets = {
      rockets: [
        { id: 1, reserved: false },
        { id: 2, reserved: false },
      ],
    };
    const nextState = rocketReducer(
      initialStateWithRockets,
      reserveBooking({ id: 1 }),
    );
    expect(nextState.rockets[0].reserved).toBe(true);
    expect(nextState.rockets[1].reserved).toBe(false);
  });

  it('should handle cancelBooking', () => {
    const initialStateWithRockets = {
      rockets: [
        { id: 1, reserved: true },
        { id: 2, reserved: false },
      ],
    };
    const nextState = rocketReducer(
      initialStateWithRockets,
      cancelBooking({ id: 1 }),
    );
    expect(nextState.rockets[0].reserved).toBe(false);
    expect(nextState.rockets[1].reserved).toBe(false);
  });
});
