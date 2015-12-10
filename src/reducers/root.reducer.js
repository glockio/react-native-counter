import {Map, Seq, List,OrderedMap, Record} from 'immutable';

const initialState = Map({
  loading: false,
  count: 0,
});

export default function rootReducer(state=initialState, action) {

  console.log(`Calling ${action.type}...`);
  console.log(action);

  switch (action.type) {
    case "SET_LOADING": {
      // always need to return the new state
      return state.set('loading', action.loading);
    }

    case "INCREASE_COUNT": {
      return state.update("count", (currentVal) =>  currentVal + 1)
    }

    case "SET_COUNT": {
      return state.set("count", action.count);
    }
    case "FETCH_COUNT": {
      if(action.fetching) {
        return state.set('loading', true);
      } else {

        if(action.error) {
          // error handler
        } else {
          return state.merge({count: action.count, loading: false});
        }
      }

    }
  }
  return state;
}
