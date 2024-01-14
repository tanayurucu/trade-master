import { ClerkProvider } from "@clerk/nextjs";
import { Footer } from "./_components/footer";
import { Navbar } from "./_components/navbar";
import { ThemeProvider } from "@/components/theme-provider";

const MarketingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ClerkProvider>
      <div className="h-full">
        <Navbar />
        <div className="h-full">
          <main className="pt-40 pb-20">{children}</main>
        </div>
        <Footer />
      </div>
    </ClerkProvider>
  );
};

export default MarketingLayout;
