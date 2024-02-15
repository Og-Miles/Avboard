import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Dashboard from "./dashboard/dashboard";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    router.push("/dashboard");
  }, [router]);
  return null;
  return (
    <>
      <Head>
        <title>Avboard</title>
        <meta name='Avboard' content='Avboard' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <Dashboard />
      </main>
    </>
  );
}
