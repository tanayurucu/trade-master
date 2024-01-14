import HeaderNavbar from "./_components/header-navbar";
import { Navbar } from "./_components/navbar";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      <Navbar />
      {children}
    </div>
  );
};

export default HomeLayout;
