import { Button } from "./Button";

type ClassCardProps = {
   title: string;
   isAdmin?: boolean;
};

function ClassCard({ title, isAdmin }: ClassCardProps) {
   const subscribe = async () => {};

   const Boundary = () => () => {};

   return (
      <article className="border border-stone-800 py-2 px-8 rounded-lg">
         <h3>{title}</h3>
         <Button>{isAdmin ? "Modify" : "Join"}</Button>
      </article>
   );
}

export { ClassCard };

export type { ClassCardProps };
