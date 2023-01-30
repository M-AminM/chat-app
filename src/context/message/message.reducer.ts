export const MessageReducer = (state: any, action: any) => {
  switch (action.type) {
    case "GET_ALL_MESSAGE":
      state = action.payload;
      return state;
    default:
      return state;
  }
};
