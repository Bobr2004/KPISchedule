import { useEffect } from "react";
import { useRole } from "../context/RoleContext";
import { useNavigate } from "react-router-dom";

const useNavigateOnRole = () => {
   const { role } = useRole();
   const navigateTo = useNavigate();

   useEffect(() => {
      if (role === "admin") {
         navigateTo("/admin");
      } else if (role === "user") {
         navigateTo("/user");
      } else {
         navigateTo("/");
      }
   }, [role]);
};

export { useNavigateOnRole };
