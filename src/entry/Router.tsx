import { BrowserRouter, Link, Outlet, Route, Routes } from "react-router-dom";
import { AuthPage } from "../pages/AuthPage";
import { GuestPage } from "../pages/GuestPage";
import { AdminPage } from "../pages/AdminPage";
import { UserPage } from "../pages/UserPage";

function Router() {
   return (
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<Layout />}>
               <Route index path="/" element={<GuestPage />} />
               <Route path="/auth" element={<AuthPage />} />
               <Route path="/admin" element={<AdminPage />} />
               <Route path="/user" element={<UserPage />} />
               <Route path="*" element={<p>404</p>} />
            </Route>
         </Routes>
      </BrowserRouter>
   );
}

function Layout() {
   return (
      <>
         <header className="border-b border-stone-800 py-3 px-4">
            <h1 className="text-3xl font-bold text-center">
               <Link to="/">Schedule</Link>{" "}
            </h1>
         </header>
         <main className="container mx-auto mt-8 flex flex-col gap-4">
            <Outlet />
         </main>
      </>
   );
}

export { Router };
