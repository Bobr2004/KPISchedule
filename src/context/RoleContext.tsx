import {
   createContext,
   PropsWithChildren,
   useContext,
   useEffect,
   useState
} from "react";
import { getCurrentUser } from "../requests/GET";
import { parseRole } from "../helpers/functions";

type Roles = "user" | "guest" | "admin";

type RoleContextType = {
   role: Roles;
   setRole: (role: Roles) => void;
   setRoleFromRequest: () => Promise<"user" | "guest" | "admin">;
};

const RoleContext = createContext<RoleContextType>({
   role: "guest",
   setRole: () => {},
   setRoleFromRequest: async () => "guest"
});

const transferRole = (role: any) => {
   if (role === "ADMIN") return "admin";
   if (role === "USER") return "user";
   return "guest";
};

function RoleContextProvider({ children }: PropsWithChildren) {
   const [roleState, setRoleState] = useState<Roles>(() => {
      if (localStorage.getItem("role"))
         return localStorage.getItem("role") as Roles;
      return "guest";
   });

   const setRole = (role: Roles) => {
      setRoleState(role);
   };

   const setRoleFromRequest = async () => {
      const data = await getCurrentUser();
      setRole(transferRole(parseRole(data)));
      return transferRole(parseRole(data));
   };

   useEffect(() => {
      (async () => {
         await setRoleFromRequest();
      })();
   }, []);

   useEffect(() => {
      localStorage.setItem("role", roleState);
   }, [roleState]);

   return (
      <RoleContext.Provider
         value={{ role: roleState, setRole, setRoleFromRequest }}
      >
         {children}
      </RoleContext.Provider>
   );
}

function useRole() {
   const context = useContext(RoleContext);
   return context;
}

export { RoleContextProvider, useRole };
