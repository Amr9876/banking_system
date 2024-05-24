import MobileNav from "@/components/MobileNav";
import Sidebar from "@/components/Sidebar";
import { getLoggedInUser } from "@/lib/actions/user.actions";
import Image from "next/image";
import { redirect } from "next/navigation";
import { PropsWithChildren } from "react";

const RootLayout = async ({ children }: PropsWithChildren) => {
  const loggedInUser = await getLoggedInUser();

  if (!loggedInUser) redirect("/sign-in");

  return (
    <main className="flex h-screen w-full font-inter">
      <Sidebar user={loggedInUser} />

      <div className="flex flex-col size-full">
        <div className="root-layout">
          <Image src="/icons/logo.svg" alt="logo" width={30} height={30} />
          <div>
            <MobileNav user={loggedInUser} />
          </div>
        </div>
        {children}
      </div>
    </main>
  );
};

export default RootLayout;
