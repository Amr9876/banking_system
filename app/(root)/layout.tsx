import MobileNav from "@/components/MobileNav";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";
import { PropsWithChildren } from "react";

const RootLayout = ({ children }: PropsWithChildren) => {
  const loggedIn = { firstName: "Adrian" };

  return (
    <main className="flex h-screen w-full font-inter">
      <Sidebar user={loggedIn as any} />

      <div className="flex flex-col size-full">
        <div className="root-layout">
          <Image src="/icons/logo.svg" alt="logo" width={30} height={30} />
          <div>
            <MobileNav user={loggedIn as any} />
          </div>
        </div>
        {children}
      </div>
    </main>
  );
};

export default RootLayout;
