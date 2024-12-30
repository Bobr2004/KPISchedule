import { useForm } from "react-hook-form";
import { AuthBox } from "../components/auth/AuthBox";
import { Box } from "../components/ui/Box";
import { Button } from "../components/ui/Button";
import Classes from "../components/user/Classes";
import { Input } from "../components/ui/Input";
import { useState } from "react";

function AdminPage() {
   const [modal, setModal] = useState<boolean>(false);

   return (
      <>
         <section>
            <AuthBox />
         </section>
         <section>{/* <CurrentSchedule /> */}</section>
         <section className="mx-3">
            <h2 className="text-center text-xl mb-4">Modify Classes</h2>
            <Classes isAdmin={true} />
            <div className="mt-4 flex justify-center">
               <Button onClick={() => setModal(true)}>
                  {" "}
                  + Create new class
               </Button>
            </div>
            {modal && <NewClassModal {...{ setModal }} />}
         </section>
      </>
   );
}

function NewClassModal({ setModal }: { setModal: (isO: boolean) => void }) {
   const { register, handleSubmit } = useForm();
   return (
      <>
         <div
            className="absolute inset-0 w-screen h-screen flex justify-center items-center bg-black opacity-70"
            onClick={() => setModal(false)}
         ></div>
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Box className="bg-stone-950 max-w-[450px] mx-auto">
               <h2 className="text-xl text-center mb-3">Add new class</h2>
               <form className="flex flex-col gap-2">
                  <Input register={register("field1")} placeholder="Title" />
                  <div className="grid grid-cols-2 gap-2">
                     <Input
                        register={register("field1")}
                        placeholder="Subject name"
                     />
                     <Input register={register("field1")} placeholder="Time" />
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                     <Input
                        register={register("field1")}
                        placeholder="Subject name"
                     />
                     <Input register={register("field1")} placeholder="Time" />
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                     <Input
                        register={register("field1")}
                        placeholder="Subject name"
                     />
                     <Input register={register("field1")} placeholder="Time" />
                  </div>
                  <Button>+ Add new item</Button>
               </form>
            </Box>
         </div>
      </>
   );
}

export { AdminPage };
