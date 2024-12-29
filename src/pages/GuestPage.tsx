import { Link } from "react-router-dom";
import { Box } from "../components/ui/Box";
import { useNavigateOnRole } from "../helpers/hooks";
import { useRef } from "react";
import { ClassCard, ClassCardProps } from "../components/ui/ClassCard";

function GuestPage() {
   useNavigateOnRole();
   const ClassList = useRef<ClassCardProps[]>([
      { title: "tw - 22" },
      { title: "IPS - 31" },
      { title: "Ci - 21" },
      { title: "Fi - 11" },
      { title: "NI - 22" },
      { title: "JJ - 11" },
      { title: "Er - 22" }
   ]);
   return (
      <>
         <section>
            <h2 className="text-xl text-center mb-2">KPI schedule</h2>
            <p className="max-w-[60ch] mx-auto">
               The KPI Schedule Project is a dynamic platform designed to
               streamline the management and tracking of schedules for both
               admins and users.
            </p>

            <p className="max-w-[60ch] mx-auto mt-4">
               Admins: Have the ability to create and manage schedules
               efficiently. Can assign, update, or remove participants from
               schedules. Users: Can join schedules created by admins. Track
               their progress and stay updated on schedule-related tasks.
               Collaborate with team members to achieve shared objectives. .
            </p>
            <p className="max-w-[60ch] mx-auto mt-4">
               This project aims to enhance productivity and accountability by
               offering a centralized platform for managing and participating in
               schedules tied to key performance indicators (KPIs)
            </p>
         </section>
         <section>
            <h2 className="text-xl text-center mb-4 mt-8">Recent schedules</h2>
            <ul className="flex flex-wrap gap-2 justify-center">
               {ClassList.current.map(({ title }, i) => (
                  <ClassCard {...{ title }} key={i} />
               ))}
            </ul>
         </section>
         <section>
            <h2 className="text-xl text-center mb-2 mt-8">Wont to join?</h2>
            <p className="underline text-center">
               <Link to="/auth">Create an account</Link>
            </p>
         </section>
      </>
   );
}

export { GuestPage };
