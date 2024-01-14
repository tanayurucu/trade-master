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

const StocksPage = () => {
  
  return (
    <div className="mt-20">
      <div className="px-5">
        <StocksTable />
      </div>
    </div>
  );
};

export default StocksPage;
