import Link from "next/link";
import Image from "next/image";
import localFont from "next/font/local";
import { Poppins } from "next/font/google";
import tradeImage from "@/public/trading_graph.jpg";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { TITLE } from "@/constants/names";

const headingFont = localFont({
  src: "../../public/fonts/font.woff2",
});

const textFont = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const MarketingPage = () => {
  return (
    <div className="flex items-center justify-center flex-col">
      <div
        className={cn(
          "flex items-center justify-center flex-col",
          headingFont.className
        )}
      >
        <h1 className="text-3xl md:text-6xl text-center text-slate-100 mb-6">
          Rise to the Challenge
        </h1>
        <div className="text-3xl md:text-6xl bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white px-4 p-2 rounded-md pb-4 w-fit">
          Master the Markets
        </div>
      </div>
      <div
        className={cn(
          "text-sm md:text-xl text-slate-300 mt-4 max-w-xs md:max-w-2xl text-center mx-auto",
          textFont.className
        )}
      >
        the ultimate platform where insights meet investments. Challenge
        yourself to forecast stock prices, compete with fellow traders, and
        sharpen your predictive prowess.
      </div>
      <Button className="mt-6" size="lg" asChild>
        <Link href="/sign-up">Get {TITLE} for free</Link>
      </Button>
      <Image
        src={tradeImage}
        alt="Trading Graph" // Provide a descriptive alt text
        width={800} // Set the width of the image
        height={400} // Set the height of the image
        className="mt-6 rounded-md" // Add any additional styling as needed
      />
    </div>
  );
};

export default MarketingPage;
