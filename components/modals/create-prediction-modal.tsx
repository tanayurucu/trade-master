"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useCreatePredictionModal } from "@/hooks/use-create-prediction-modal";

export const CreatePredictionModal = () => {
  const createPredictionModal = useCreatePredictionModal();
  const onClickSubmit = () => {
    console.warn("submit");
  };

  return (
    <Dialog
      open={createPredictionModal.isOpen}
      onOpenChange={createPredictionModal.onClose}
    >
      <DialogContent className="">
        {/* <DialogHeader>
          <DialogTitle>Create prediction</DialogTitle>
          <DialogDescription>Description</DialogDescription>
        </DialogHeader> */}
        <div className="grid gap-4 py-4">
          HELLO
          {/* <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input defaultValue="Pedro Duarte" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input defaultValue="@peduarte" className="col-span-3" />
          </div> */}
        </div>
        {/* <DialogFooter>
          <Button onClick={onClickSubmit} type="submit">
            Save changes
          </Button>
        </DialogFooter> */}
      </DialogContent>
    </Dialog>
  );
}
