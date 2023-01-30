export const ContactReducer = (state: any, action: any) => {
  switch (action.type) {
    case "GET_ALL_CONTACTS":
      state = action.payload;
      return state;
    default:
      return state;
  }
};
