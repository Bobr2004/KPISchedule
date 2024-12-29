import { useRef } from "react";
import { ClassCard, ClassCardProps } from "../ui/ClassCard";

function Classes() {
   const ClassList = useRef<ClassCardProps[]>([
      { title: "NI - 22" },
      { title: "JJ - 11" },
      { title: "Er - 22" },
      { title: "tw - 22" },
      { title: "IPS - 31" },
      { title: "Ci - 21" },
      { title: "Fi - 11" }
   ]);
   return (
      <ul className="flex flex-wrap gap-2 justify-center">
         {ClassList.current.map(({ title }, i) => (
            <ClassCard {...{ title }} key={i} />
         ))}
      </ul>
   );
}

export default Classes;
