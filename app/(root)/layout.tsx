import { PropsWithChildren } from "react";

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <main>
      SIDEBAR
      {children}
    </main>
  );
};

export default RootLayout;
