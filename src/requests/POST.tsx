import { z } from "zod";
import { API } from "../config/server.config";

const regScheme = z.object({
   firstName: z
      .string()
      .min(1, "First name is required")
      .max(20, "not that big ahhhh"),
   lastName: z
      .string()
      .min(1, "First name is required")
      .max(20, "not that big ahhhh"),
   email: z.string().email("Invalid email"),
   phoneNumber: z.string().regex(/^\+380\d{9}$/, "Invalid phone number"),
   password: z.string().min(6, "Password must be at least 6 characters")
});

type RegBodyType = z.infer<typeof regScheme>;

const createUser = async (body: RegBodyType) => {
   try {
      const res = await API.post("/registration", body);
      return res;
   } catch (err) {
      console.log(err);
      return null;
   }
};

const logScheme = z.object({
   email: z.string().email("Invalid email"),
   password: z.string().min(6, "Password must be at least 6 characters")
});

type LogBodyType = z.infer<typeof regScheme>;

const loginUser = async (body: LogBodyType) => {
   try {
      const res = await API.post("/login", body);
      return res;
   } catch (err) {
      console.log(err);
      return null;
   }
};

export { createUser, regScheme, loginUser, logScheme };

export type { RegBodyType, LogBodyType };
