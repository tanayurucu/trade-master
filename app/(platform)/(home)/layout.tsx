import HeaderNavbar from "./_components/header-navbar";
import { Navbar } from "./_components/navbar";
import { NavigationMenuDemo } from "./_components/navigation-trial";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      <NavigationMenuDemo />
      {children}
    </div>
  );
};

export default HomeLayout;
