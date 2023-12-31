import { type AppType } from "next/app";
import "~/styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import React from "react";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default MyApp;
