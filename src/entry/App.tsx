import { RoleContextProvider } from "../context/RoleContext";
import { Router } from "./Router";

function App() {
   return (
      <>
         <RoleContextProvider>
            <Router />
         </RoleContextProvider>
      </>
   );
}

export default App;
