import { createStore } from "redux";

const actionHandlers = {
  INCREMENT: (state, action) => ({
    ...state,
    count: state.count + action.payload
  }),
  DECREMENT: (state, action) => ({
    ...state,
    count: state.count - action.payload
  })
};

function reducer(
  state = {
    count: 42,
    person: {
      firstName: "Donald",
      lastName: "Duck"
    }
  },
  action
) {
  //   switch (action.type) {
  //     case "INCREMENT":
  //       return { ...state, count: state.count + action.payload };

  //     default:
  //       return state;
  //   }

  const handler = actionHandlers[action.type];
  if (handler) {
    return handler(state, action);
  }

  return state;
}

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
