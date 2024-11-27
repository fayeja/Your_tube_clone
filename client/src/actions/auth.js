import axios from "axios";
import { setLogout } from "../state";

export const logout = () => async (dispatch) => {
  try {
    await axios.get(`${process.env.REACT_APP_SERVER}/auth/logout`, {
      withCredentials: true,
    }); // Adjust the endpoint as needed
    dispatch(setLogout());
    window.location.href = "/";
  } catch (error) {
    console.error("Logout error:", error);
    alert("Logout failed. Please try again later.");
  }
};
