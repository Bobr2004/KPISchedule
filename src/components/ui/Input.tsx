import { forwardRef } from "react";
import { FieldError } from "react-hook-form";

type InputProps = {
   register: any;
   type?: string;
   placeholder: string;
   error?: FieldError;
};

const Input = forwardRef<HTMLInputElement, InputProps>(
   ({ register, type, placeholder, error }, ref) => {
      type ??= "text";
      return (
         <div>
            <input
               ref={ref}
               className="py-2 px-4 border border-stone-800 rounded-lg hover:border-stone-700 focus:outline outline-1 outline-stone-700"
               {...register}
               {...{ type, placeholder }}
            />
            {error && <p className="text-rose-400 text-sm mt-0.5 ml-1">{error.message}</p>}
         </div>
      );
   }
);

export { Input };
