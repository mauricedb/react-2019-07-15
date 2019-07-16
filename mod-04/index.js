function createCounterAction(amount = 1) {
  const addCounterAction = {
    type: "ADD",
    payload: {
      amount
    }
  };

  return addCounterAction;
}

function changeNameAction(newName) {
  return {
    type: "CHANGE-NAME",
    payload: newName
  };
}

const store = {
  state: {
    value: 0,
    firstName: "Maurice"
  }
};

const listeners = [];

function dispatcher(action) {
  //   console.log(action);

  switch (action.type) {
    case "ADD":
      //   store.state.value += action.payload.amount;
      store.state = {
        ...store.state,
        value: store.state.value + action.payload.amount
      };
      break;
    case "CHANGE-NAME":
      //   store.state.value += action.payload.amount;
      store.state = {
        ...store.state,
        firstName: action.payload
      };
      break;
  }

  listeners.forEach(cb => cb(store.state));

  //   console.log(store);
}

const actionWith1 = createCounterAction();
const actionWith5 = createCounterAction(5);

listeners.push(state => console.log("Listerner 1", state.value));

dispatcher(actionWith1);

listeners.push(state => console.log("Listerner 2", state));
dispatcher(actionWith5);

dispatcher(changeNameAction("Jack"));
