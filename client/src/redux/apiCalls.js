import { publicRequest } from "../requestMethods";
import { loginFailure, loginStart, loginSuccess, logout } from "./userRedux";
import { clearCart } from "./cartRedux";

export const login=async (dispatch, user)=>{
    dispatch(loginStart());
    try {
        const res=await publicRequest.post("/auth/login",user);
        dispatch(loginSuccess(res.data));
    } catch (err) {
        dispatch(loginFailure());
    }
}

export const Logout = async (dispatch) => {
    try {  
      dispatch(logout());
      dispatch(clearCart())
    } catch (err) {
      console.log(err)
    }
  };