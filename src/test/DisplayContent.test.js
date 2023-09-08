import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import DisplayContent from '../component/Missions/DisplayContent';

// Create a mock Redux store
const mockStore = configureStore([]);
const initialState = {
  missionSlice: {
    isLoading: false,
    data: [
      {
        mission_id: '1', mission_name: 'Mission 1', description: 'Description 1', reserved: false,
      },
      {
        mission_id: '2', mission_name: 'Mission 2', description: 'Description 2', reserved: true,
      },
    ],
  },
};

let store;

beforeEach(() => {
  store = mockStore(initialState);
});

describe('DisplayContent', () => {
  it('renders component correctly', () => {
    const { getByText } = render(
      <Provider store={store}>
        <DisplayContent />
      </Provider>,
    );

    // You can now use getByText, getByTestId, etc. to query and test your component
    expect(getByText('Mission 1')).toBeInTheDocument();
    expect(getByText('Mission 2')).toBeInTheDocument();
    expect(getByText('Description 1')).toBeInTheDocument();
    expect(getByText('Description 2')).toBeInTheDocument();
  });

  it('performs some action and checks the result', () => {
    // Dispatch some action and test the component's behavior
    // For example, you can simulate a click on a button and then assert the state change
    // You would need to import fireEvent from '@testing-library/react' for this
  });
});
