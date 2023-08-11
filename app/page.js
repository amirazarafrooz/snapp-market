import { Header } from "@/components/header/Header";
import { Footer } from "@/components/footer/Footer";
import { Suspense } from "react";
// import HomePage from "@/components/HomePage/HomePage";
import dynamic from "next/dynamic";
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

function delay(promise) {
  return new Promise((resolve) => {
    setTimeout(resolve, 6000);
  }).then(() => promise);
}
