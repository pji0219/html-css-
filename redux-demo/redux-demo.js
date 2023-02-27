const redux = require('redux');

defaultState = {
  counter: 0,
};

const counterReducer = (state = defaultState, action) => {
  if (action.type === 'increment') {
    return {
      counter: state.counter + 1,
    };
  }

  if (action.type === 'decrement') {
    return {
      counter: state.counter - 1,
    };
  }

  return state;
};

const store = redux.createStore(counterReducer);

const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};

// 구독
store.subscribe(counterSubscriber);

// 액션 디스패치
store.dispatch({ type: 'increment' });
store.dispatch({ type: 'decrement' });
