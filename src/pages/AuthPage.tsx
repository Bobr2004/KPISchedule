import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Button } from "../components/ui/Button";
import { Box } from "../components/ui/Box";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input } from "../components/ui/Input";
import {
   createUser,
   LogBodyType,
   loginUser,
   logScheme,
   RegBodyType,
   regScheme
} from "../requests/POST";

import { useRole } from "../context/RoleContext";

function AuthPage() {
   const [urlParams, setUrlParams] = useSearchParams();
   const authType = urlParams.get("auth");
   useEffect(() => {
      if (!authType) {
         setUrlParams({
            auth: "reg"
         });
      }
   }, []);

   const setAuthType = (auth: "reg" | "log") => () => {
      setUrlParams({
         auth
      });
   };

   return (
      <section>
         <h2 className="text-center text-2xl">Authorization page</h2>
         <div className="grid grid-cols-2 max-w-[350px] gap-4 mx-auto mt-8">
            <Button onClick={setAuthType("reg")}>Registration</Button>
            <Button onClick={setAuthType("log")}>Login</Button>
         </div>
         {authType === "reg" && <RegForm />}
         {authType === "log" && <LogForm />}
      </section>
   );
}

function RegForm() {
   const {
      register,
      handleSubmit,
      formState: { errors, isSubmitting }
   } = useForm<RegBodyType>({
      resolver: zodResolver(regScheme)
   });

   const { setRoleFromRequest } = useRole();
   const navigateTo = useNavigate();

   const onSubmit = async (data: RegBodyType) => {
      await createUser(data);
      const role = await setRoleFromRequest();
      if (role === "admin") {
         navigateTo("/admin");
      } else if (role === "user") {
         navigateTo("/user");
      }
   };
   return (
      <Box className="mx-auto w-[350px] mt-4">
         <form
            className="flex flex-col gap-2"
            onSubmit={handleSubmit(onSubmit)}
         >
            <h2 className="text-lg text-center">Create user</h2>
            <Input
               register={register("firstName")}
               placeholder="First name"
               error={errors.firstName}
            />
            <Input
               register={register("lastName")}
               placeholder="Last name"
               error={errors.lastName}
            />
            <Input
               register={register("email")}
               placeholder="Email"
               error={errors.email}
            />
            <Input
               register={register("phoneNumber")}
               placeholder="Phone number"
               error={errors.phoneNumber}
            />
            <Input
               register={register("password")}
               placeholder="Password"
               type="password"
               error={errors.password}
            />
            {isSubmitting ? (
               <p className="text-center mt-2">
                  <i className="pi pi-spin pi-spinner"></i>
               </p>
            ) : (
               <Button>Submit</Button>
            )}
         </form>
      </Box>
   );
}

function LogForm() {
   const {
      register,
      handleSubmit,
      formState: { errors, isSubmitting }
   } = useForm<LogBodyType>({
      resolver: zodResolver(logScheme)
   });

   const { setRoleFromRequest } = useRole();
   const navigateTo = useNavigate();

   const onSubmit = async (data: RegBodyType) => {
      await loginUser(data);
      const role = await setRoleFromRequest();
      if (role === "admin") {
         navigateTo("/admin");
      } else if (role === "user") {
         navigateTo("/user");
      }
   };
   return (
      <Box className="mx-auto w-[350px] mt-4">
         <form
            className="flex flex-col gap-2"
            onSubmit={handleSubmit(onSubmit)}
         >
            <h2 className="text-lg text-center">Create user</h2>

            <Input
               register={register("email")}
               placeholder="Email"
               error={errors.email}
            />

            <Input
               register={register("password")}
               placeholder="Password"
               type="password"
               error={errors.password}
            />
            {isSubmitting ? (
               <p className="text-center mt-2">
                  <i className="pi pi-spin pi-spinner"></i>
               </p>
            ) : (
               <Button>Submit</Button>
            )}
         </form>
      </Box>
   );
}

export { AuthPage };
