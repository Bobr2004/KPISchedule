import { Button } from "./Button";

type ClassCardProps = {
   title: string;
};

function ClassCard({ title }: ClassCardProps) {
   const subscribe = async () => {};

   const Boundary = () => () => {};

   return (
      <article className="border border-stone-800 py-2 px-8 rounded-lg">
         <h3>{title}</h3>
         <Button>Join</Button>
      </article>
   );
}

export { ClassCard };

export type { ClassCardProps };
