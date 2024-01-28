import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import NumericalCardContent from "../_components/numerical-card-content";

export default function Page({ params }: { params: { stockId: string } }) {
  return (
    <div className="p-3">
      <h1 className="text-3xl">THY - Turkish Airlines</h1>
      <div>My StockId: {params.stockId}</div>
      <div className="flex flex-col gap-3">
        <Card>
          <CardHeader>
            <CardTitle className="text-center">Stock Overview</CardTitle>
            <CardDescription>
              Overall Prediction Scores For Periods
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-3">
              <NumericalCardContent
                title={"Short-Term Prediction"}
                value={44}
                info={""}
              ></NumericalCardContent>
              <NumericalCardContent
                title={"Mid-Term Prediction"}
                value={55}
                info={""}
              ></NumericalCardContent>
              <NumericalCardContent
                title={"Long-Term Prediction"}
                value={100}
                info={""}
              ></NumericalCardContent>
            </div>
            {/* <p>Card Content</p> */}
          </CardContent>
          {/* <CardFooter>
            <p>Card Footer</p>
          </CardFooter> */}
        </Card>
        <div className="grid md:grid-cols-2 gap-2 sm:grid-cols-1">
          <Card>
            <CardHeader>
              <CardTitle>Title</CardTitle>
              <CardDescription>My description</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Card Content</p>
            </CardContent>
            <CardFooter>
              <p>Card Footer</p>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Title</CardTitle>
              <CardDescription>My description</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Card Content</p>
            </CardContent>
            <CardFooter>
              <p>Card Footer</p>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
