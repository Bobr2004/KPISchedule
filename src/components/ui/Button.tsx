import { PropsWithChildren } from "react";

type ButtonProps = PropsWithChildren & {
   onClick?: () => void;
   isActive?: boolean;
};

function Button({ children, onClick, isActive }: ButtonProps) {
   return (
      <button
         onClick={onClick}
         className={`py-2 px-4 border border-stone-800 rounded-lg transition-all hover:bg-stone-900 hover:border-stone-700 ${
            isActive ? "button-active" : ""
         }`}
      >
         {children}
      </button>
   );
}

export { Button };
