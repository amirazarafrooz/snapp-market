import React from "react";
import dynamic from "next/dynamic";
import delay from "@/utils/delay";
import UserLoading from "./UserLoading";

const UserPage = dynamic(
  async () => await delay(import("../../../components/UserPage/UserPage")),
  {
    loading: () => <UserLoading />,
  }
);

export default function User() {
  return <UserPage />;
}
