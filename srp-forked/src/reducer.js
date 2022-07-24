const Reducer = (state, action) => {
  const { payload, type } = action;
  switch (type) {
    case "LOADING_SUCCESS":
      return Object.assign({}, state, { isLoading: payload });
    case "GET_DATA_SUCCESS":
      return Object.assign({}, state, { articles: payload });
    default:
      return state;
  }
};

export default Reducer;
