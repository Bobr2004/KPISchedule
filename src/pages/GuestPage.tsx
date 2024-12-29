import { Link } from "react-router-dom";
import { Box } from "../components/ui/Box";

function GuestPage() {
   return (
      <>
         <section>
            <h2 className="text-xl text-center mb-2">KPI schedule</h2>
            <p>
               The KPI Schedule Project is a dynamic platform designed to
               streamline the management and tracking of schedules for both
               admins and users. Admins: Have the ability to create and manage
               schedules efficiently. Can assign, update, or remove participants
               from schedules. Oversee all schedules to ensure proper
               organization and compliance with KPIs. Users: Can join schedules
               created by admins. Track their progress and stay updated on
               schedule-related tasks. Collaborate with team members to achieve
               shared objectives. This project aims to enhance productivity and
               accountability by offering a centralized platform for managing
               and participating in schedules tied to key performance indicators
               (KPIs).
            </p>
         </section>
         <section>
            <h2 className="text-xl text-center mb-2">Recent schedules</h2>
            <ul className="flex flex-wrap">
               <li>
                  <Box>1</Box>
               </li>
               <li>
                  <Box>2</Box>
               </li>
               <li>
                  <Box>3</Box>
               </li>
               <li>
                  <Box>4</Box>
               </li>
            </ul>
         </section>
         <section>
            <h2 className="text-xl text-center mb-2">Wont to join?</h2>
            <p className="underline text-center">
               <Link to="/auth">Create an account</Link>
            </p>
         </section>
      </>
   );
}

export { GuestPage };
