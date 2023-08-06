"use client";
import { useSelector } from "react-redux";
import Button from "../button/Button";
import { HistoryCart } from "./HistoryCart";

export const History = () => {
  const history = useSelector((store) => store.history);
  return (
    <div className="w-full">
      <div className="w-full flex justify-between items-center p-3 mb-5 bg-snp-light rounded border-snp-secondary">
        <div>
          <p className="text-snp-black">تاریخچه سفارشات</p>
        </div>
        <div>
          <Button btnStyleparam={"deleteAll"}></Button>
        </div>
      </div>
      {history.map((his) => {
        return <HistoryCart details={his}/>
      })}
    </div>
  );
};
