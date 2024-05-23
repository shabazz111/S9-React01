import axios from "axios";
import { ADMIN_LOGIN, DASHBOARD_DATA } from "../Constants/app-constant";

export const handleLoginSubmit = async ({
  setLoader,
  setUser,
  toast,
  username,
  password,
}) => {
  try {
    setLoader(true);
    const { data } = await axios.post(ADMIN_LOGIN, {
      username,
      password,
    });
    localStorage.setItem("auth", data?.auth);
    setUser(data);
    toast.success(data?.message);
  } catch (error) {
    toast.error(
      error?.response?.data?.message == "Internal server error"
        ? "Something went wrong"
        : error?.response?.data?.message
    );
  } finally {
    setLoader(false);
  }
};
export const handleDashBoardFetch = async ({ setLoader, setData }) => {
  try {
    setLoader(true);
    const { data } = await axios.get(DASHBOARD_DATA);
    setData(data?.data);
  } catch (error) {
    toast.error(
      error?.response?.data?.message == "Internal server error"
        ? "Something went wrong"
        : error?.response?.data?.message
    );
  } finally {
    setLoader(false);
  }
};
