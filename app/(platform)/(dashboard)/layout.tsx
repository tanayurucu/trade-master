import { DoubleNavbar } from "@/components/DoubleNavbar/DoubleNavbar";
import { Navbar } from "./_components/navbar";

const DashboardLayout = ({ 
  children
}: { 
  children: React.ReactNode;
 }) => {
  return (
    <div className="h-full">
      <Navbar />
      <DoubleNavbar></DoubleNavbar>
      {children}
    </div>
  );
 };

 export default DashboardLayout;
