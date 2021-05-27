export const initialState = {
  user: null,

  //  REMOVE AFTER DEVELOPING
  token:
    "BQC_4FjeJxAY0FSdekcBdZ45cgaTL6mvebr4CBzDWThsU0yaMZgmxjEF86iv6YR-YaPgoRkxmq9ObnUC8FpWEBa7AQaPglqsU3fU2GHHM3bSx56kmI4g9H43a_dw1LXro_LOCvQgzcF9KtkDnKPeTen9guuyvClktIJg13qkHaewSiUc",
  playlists: [],
  playing: false,
  item: null,
};

const reducer = (state, action) => {
  console.log("action", action);

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };

    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };

    default:
      throw new Error("no action found");
  }
};

export default reducer;
