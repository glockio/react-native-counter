import {Map, Seq, List,OrderedMap, Record} from 'immutable';

const initialState = Map({
  loading: false,
});

export default function rootReducer(state=initialState, action) {

  console.log(`Calling ${action.type}...`);

  switch (action.type) {
    case "SET_LOADING": {
      // always need to return the new state
      return state.set('loading', action.loading);
    }
  }
  return state;
}
