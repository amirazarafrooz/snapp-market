import React from "react";
import dynamic from "next/dynamic";
import delay from "@/utils/delay";
import Loading from "./Loading";

const UserPage = dynamic(
  async () => await delay(import("../../../components/UserPage/UserPage")),
  {
    loading: () => <Loading />,
  }
);

export default function User() {
  return <UserPage />;
}
