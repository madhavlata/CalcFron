import "../styles/globals.css";
import type { AppProps } from "next/app";
// import { RecoilRoot } from "recoil";
import { BrowserRouter, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { Route, redirect as DomRedirect } from "react-router-dom";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  );
}

export default MyApp;
