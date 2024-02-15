import Layout from "@/Layout/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "../styles/Home.module.css";
import { ClerkProvider } from "@clerk/nextjs";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ClerkProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ClerkProvider>
  );
}
