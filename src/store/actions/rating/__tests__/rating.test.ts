import { rating, InitialState } from '../../../reducers/rating';

import { actionRating } from '../rating';

let state: InitialState;

beforeEach(() => {
  state = {
    rating: 55,
    allowToVote: true,
  };
});

test('raise rating and mark as votes', () => {
  const newState = rating(state, actionRating.raisRating(2));

  expect(newState.allowToVote).toBeFalsy();
  expect(newState.rating).toBe(57);
});
