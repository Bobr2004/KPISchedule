import { API } from "../config/server.config";

const getCurrentUser = async () => {
   try {
      const { data } = await API.get("/user/getUser");
      return data;
   } catch (err) {
      console.log(err);
      return null;
   }
};

const logout = async () => {
   try {
      const res = await API.get("/logout");
      return res;
   } catch (err) {
      console.log(err);
      return null;
   }
};

const joinClass = async () => {};

export { getCurrentUser, logout };
