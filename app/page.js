import { Header } from "@/components/header/Header";
import { Footer } from "@/components/footer/Footer";
import { Suspense } from "react";
import dynamic from "next/dynamic";
import delay from "@/utils/delay";
import Loading from "./(mainlayout)/Loading";
// import HomePage from "@/components/HomePage/HomePage";

const HomePage = dynamic(
  async () => await delay(import("../components/HomePage/HomePage")),
  {
    loading: () => <Loading />,
  }
);

export default function Home() {
  return (
    <>
      <Header />
      <HomePage />
      <Footer />
    </>
  );
}
