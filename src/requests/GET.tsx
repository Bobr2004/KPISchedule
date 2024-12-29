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

export { getCurrentUser };
