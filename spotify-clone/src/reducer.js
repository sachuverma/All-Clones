export const initialState = {
  user: null,
  //  REMOVE AFTER DEVELOPING
  // token:
  //   "BQAgJjoVI-y5s5_o2Q0i-VtKybHAgMh-XwFpmKyW-9buspCzFaPykeiVf_-8Xw-6uiFjx_pv_5GnBL4QYmSpMPNUSI9bpyrMC76NImUoE9Qu-tU9BeGCRFN8BqDvUhnX5J7NPxLuQh5shm1LaofXsquj0jKBZf8Mw7lmOImLUP50g22g",
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

    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };

    default:
      throw new Error("no action found");
  }
};

export default reducer;
