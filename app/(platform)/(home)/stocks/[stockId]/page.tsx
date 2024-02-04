"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import NumericalCardContent from "../_components/numerical-card-content";
import { Button } from "@/components/ui/button";
import LeaderBoardTable from "../_components/leader-board";
import { useEditPredictionModal } from "@/hooks/use-edit-prediction-modal";
import { useCreatePredictionModal } from "@/hooks/use-create-prediction-modal";

export default function StockDetailsPage({
  params,
}: {
  params: { stockId: string };
}) {
  const editPredictionModal = useEditPredictionModal();
  const createPredictionModal = useCreatePredictionModal();
  const onClickDailyPredict = () => {
    console.warn("daily");
    createPredictionModal.onOpen();
  };

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
            <div className="grid grid-cols-3 mb-3">
              <NumericalCardContent
                title={"Instant Price"}
                value={38}
                info={""}
              ></NumericalCardContent>
              <NumericalCardContent
                title={"Overall Predicted Direction"}
                value={"Strong Buy"}
                info={""}
              ></NumericalCardContent>
              <NumericalCardContent
                title={"Daily Change"}
                value={"+%3"}
                info={""}
              ></NumericalCardContent>
            </div>
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
              <CardTitle>Active Prediction Challanges</CardTitle>
              <CardDescription>
                Make your predictions for future of the stock
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-1">
              <div className="flex flex-row justify-between items-center">
                Daily Prediction:
                <Button onClick={onClickDailyPredict}>Predict</Button>
              </div>
              <div className="flex flex-row justify-between items-center">
                Weekly Prediction:
              </div>
              <div className="flex flex-row justify-between items-center">
                Long Term Prediction:
                <Button>Make</Button>
              </div>
              <div className="flex flex-row justify-between items-center">
                Overall Rating:
                <Button>Make</Button>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Leader Board</CardTitle>
              <CardDescription>Best Traders of the Stock</CardDescription>
            </CardHeader>
            <CardContent>
              <LeaderBoardTable />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
