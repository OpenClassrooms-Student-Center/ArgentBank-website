import { USER_LOGIN_SUCCESS, USER_LOGIN_FAILURE } from '../actions/user.action';

const initialState = {
  loginError: null,
  userProfile: '',
  token:'',
};


  const userReducer = (state = initialState, action) => {
    return state
  }
        export default userReducer;