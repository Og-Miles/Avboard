import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang='en'>
      <Head />
      <body className={`bg-slate-50 scrollbar-thin scrollbar-thumb-violet-300`}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
