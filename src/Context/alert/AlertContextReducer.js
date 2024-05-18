const alertContextReducer = (state, action) => {
  switch (action.type) {
    case "SET_ALERT":
      return action.payload;
    case "REMOVE_ALERT":
      return null;
  }
};

export default alertContextReducer;
