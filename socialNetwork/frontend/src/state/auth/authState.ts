const initialState = {
  isAuth: (localStorage.getItem("access_token") ? true : false) as boolean
};

export default initialState;
