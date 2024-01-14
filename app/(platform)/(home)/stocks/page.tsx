"use client"

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { StocksTable } from "../_components/stocks-table";
import { useEffect, useState } from "react";

const StocksPage = () => {
  const [isTableLoading, setIsTableLoading] = useState(true);
  const onInit = async () => {
    await new Promise(res => setTimeout(res,2000));
    setIsTableLoading(false);
  };
  useEffect(() => {
    onInit();
  });
  return (
    <div className="mt-20">
      <div className="px-5">
        <StocksTable isLoading={isTableLoading} />
      </div>
    </div>
  );
};

export default StocksPage;
