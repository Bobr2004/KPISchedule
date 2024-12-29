import { AuthBox } from "../components/auth/AuthBox";
import Classes from "../components/user/Classes";
import { CurrentSchedule } from "../components/user/CurrentSchedule";

function UserPage() {
   return (
      <>
         <section>
            <AuthBox />
         </section>
         <section>
            <CurrentSchedule/>
         </section>
         <section className="mx-3">
            <h2 className="text-center text-xl mb-4">Join other classes</h2>
            <Classes />
         </section>
      </>
   );
}

export { UserPage };
