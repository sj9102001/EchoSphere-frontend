import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="bg-bgColor text-textColor h-screen w-screen relative">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
