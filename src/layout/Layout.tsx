"use client";

import { ReactNode, useEffect, useState } from "react";
import { styled } from "styled-components";
import Header from "./Header";
import { usePathname } from "next/navigation";
import { useSelector } from "react-redux";
import { getIsLoggedInState } from "@/redux/slice/authSlice";

const Layout = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();
  const isLoggedIn = useSelector(getIsLoggedInState);
  const [isClient, setIsClient] = useState(false);
  const showHeader = () => {
    if (pathname === "/" && !isLoggedIn) {
      return false;
    }
    return true;
  };

  // useEffect //
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <>
      {showHeader() && <Header />}
      <BodyContainer $top={showHeader() ? "100px" : "none"}>
        {children}
      </BodyContainer>
    </>
  );
};

const BodyContainer = styled.div<{ $top: string }>`
  background-color: #313131;
  width: 100vw;
  height: 100%;

  padding-top: ${(props) => props.$top};

  overflow: auto;
`;

export default Layout;
