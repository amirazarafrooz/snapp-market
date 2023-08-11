import { Header } from "@/components/header/Header";
import { Footer } from "@/components/footer/Footer";
import { Suspense } from "react";
import dynamic from "next/dynamic";
import delay from "@/utils/delay";
import { Loading } from "@/components/Loading";

const HomePage = dynamic(() =>
  delay(import("../components/HomePage/HomePage"))
);

export default function Home() {
  return (
    <>
      <Header />
      <Suspense fallback={<Loading />}>
        <HomePage />
      </Suspense>
      <Footer />
    </>
  );
}
