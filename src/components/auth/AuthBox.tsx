import { useEffect, useState } from "react";
import { Box } from "../ui/Box";
import { getCurrentUser, logout } from "../../requests/GET";
import {
   parseEmail,
   parseFirstName,
   parseLastName
} from "../../helpers/functions";
import { Button } from "../ui/Button";
import { useRole } from "../../context/RoleContext";
import { useNavigate } from "react-router-dom";

type userDataType = {
   firstName: string;
   lastName: string;
   email: string;
};

function AuthBox() {
   const [userData, setUserData] = useState<userDataType | null>(null);
   const { role } = useRole();
   const navigateTo = useNavigate();

   useEffect(() => {
      (async () => {
         const data = await getCurrentUser();
         setUserData({
            firstName: parseFirstName(data),
            lastName: parseLastName(data),
            email: parseEmail(data)
         });
      })();
   }, []);

   const logoutHandle = async () => {
      await logout();
      navigateTo("/auth");
   };
   return (
      <Box>
         <h2 className="text-center text-xl">Authorized as {role}</h2>

         {userData ? (
            <ul className="flex flex-col gap-2">
               <li>First name: {userData.firstName}</li>
               <li>Last name: {userData.lastName}</li>
               <li>Email: {userData.email}</li>
            </ul>
         ) : (
            <p className="text-center mt-4">
               <i
                  className="pi pi-spin pi-cog"
                  style={{ fontSize: "3rem" }}
               ></i>
            </p>
         )}
         <div className="mt-2 flex justify-start">
            <Button onClick={logoutHandle}>Logout</Button>
         </div>
      </Box>
   );
}

export { AuthBox };
