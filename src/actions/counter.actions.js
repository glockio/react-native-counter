
export function increaseCount (fireRef) {

  return (dispatch) => {
    dispatch({type: "INCREASE_COUNT"});

  }
}


export function setLoading (isLoading) {
  return {type: "SET_LOADING", loading: isLoading};
}


export function fetchCount(fireRef) {

  return (dispatch) => {

    dispatch({type: "FETCH_COUNT", fetching: true});

    fireRef.once('value', (snapShot) => {
      const count = snapShot.val();
      dispatch({type: "FETCH_COUNT",  count, fetching: false});
    });

  }
}

export function setCount(count) {
  return({type: "SET_COUNT", count});
}


