"use client";
import { useSelector } from "react-redux";
import { HistoryCart } from "./HistoryCart";

export const History = () => {
  const history = useSelector((store) => store.history);
  return (
    <div className="w-full px-4">
      <div className="w-full flex justify-between items-center p-3 mb-5 bg-snp-light rounded border-snp-secondary">
        <div>
          <p className="text-snp-black">تاریخچه سفارشات</p>
        </div>
      </div>
      {history.map((his) => {
        return <HistoryCart details={his} />;
      })}
    </div>
  );
};
