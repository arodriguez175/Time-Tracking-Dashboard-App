// localStorage saves data in the current browser's local storage.

/* loadState will look at the browser’s localStorage. 
If there is a serialized string of the "state" key, 
it will parse it as JSON. */
export const loadState = () => {
  try {
    const serializedState = localStorage.getItem("state");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState); // Turn from string into an object
  } catch (err) {
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    /* The state is serialized into a string by using
    JSON.stringify.
    Will only work if the state is serializable. */
    const serializedState = JSON.stringify(state);
    localStorage.setItem("state", serializedState);
  } catch (err) {
    // ignore write errors.
  }
};
