"use client";

import { Button, Footer, Header } from "@noahwright/design";
import React from "react";

type ClientWrapperProps = {
  children?: React.ReactNode;
};

export const ButtonWrapper = ({ children, ...props }: React.ComponentProps<typeof Button>) => {
  return <Button {...props}>{children}</Button>;
};

export const FooterWrapper = () => {
  return <Footer />;
};

export const HeaderWrapper = ({ navItems }: { navItems: Array<{ label: string; href: string }> }) => {
  return <Header navItems={navItems} />;
};
