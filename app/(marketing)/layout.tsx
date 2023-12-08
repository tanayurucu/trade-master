import { Footer } from "./_components/footer";
import { Navbar } from "./_components/navbar";

const MarketingLayout = ({
  children
}: {
  children: React.ReactNode;
}) => {
  return (
    // bg-cyan-900
    <div className="h-full ">
      <Navbar />
      <main className="pt-40 pb-20 bg-gradient-to-r from-cyan-900 to-blue-500">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MarketingLayout;
