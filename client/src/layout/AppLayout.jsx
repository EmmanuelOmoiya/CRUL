import React from "react";
import { Header, Footer } from "../components";

const AppLayout = ({ children }) => {
  return (
    <section>
      <Header />
      <main className="sm:pt-0 pt-[7rem]  sm:p-8 px-4 pb-8 w-full min-h-[calc(100vh-73px)] bg-navy text-slate font-poppins">
        {children}
      </main>
      <Footer />
    </section>
  );
};

export default AppLayout;
