import Head from "next/head";
import clsx from "clsx";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { PropsWithChildren } from "react";

export default function Layout({
  title = "Clip",
  className,
  children,
}: PropsWithChildren<{ title?: string; className?: string }>) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Video template generator projects" />
      </Head>
      <Header />
      <main className={clsx(className, "min-h-[calc(100vh-104px)]")}>
        {children}
      </main>
      {/* <Footer /> */}
    </>
  );
}
