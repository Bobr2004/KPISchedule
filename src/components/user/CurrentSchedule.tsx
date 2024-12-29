import { Box } from "../ui/Box";
import { Button } from "../ui/Button";

function CurrentSchedule() {
   return (
      <Box>
         <h2 className="text-center text-xl">Your Schedule:</h2>
         <div className="flex justify-between gap-2">
            <h3 className="text-lg mb-2">Class: Tw-22</h3>
            <Button>Leave class</Button>
         </div>
         <ul className="flex flex-col gap-2 scheduleTable">
            <li className="py-2">Algorithms 09:00-10:30</li>
            <li className="py-2">Linear Algebra 10:45-12:15</li>
            <li className="py-2">Data Structures 13:00-14:30</li>
            <li className="py-2">Operating Systems 14:45-16:15</li>
            <li className="py-2">Software Engineering 10:45-12:15</li>
            <li className="py-2">AI Fundamentals 13:00-14:30</li>
         </ul>
      </Box>
   );
}

export { CurrentSchedule };
