import React from "react";

const AuthLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <main className="flex items-center min-h-[100vh] justify-center h-full">
      {children}
    </main>
  );
};

export default AuthLayout;
