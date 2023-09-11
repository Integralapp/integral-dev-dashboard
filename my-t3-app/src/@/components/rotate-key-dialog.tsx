import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import type { ApiKeyType } from "~/server/api/routers/example";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";

type Props = {
  apiKey: ApiKeyType;
  isOpen: boolean;
  setIsRotateKeyDialogOpen: (isOpen: boolean) => void;
};

export function RotateKeyDialog({
  apiKey,
  setIsRotateKeyDialogOpen,
  isOpen,
}: Props) {
  const [name, setName] = useState<string>(apiKey.name ?? "");

  return (
    <Dialog open={isOpen}>
      <DialogContent
        className="sm:max-w-[425px]"
        onPointerDownOutside={() => setIsRotateKeyDialogOpen(false)}
        onCrossClick={() => setIsRotateKeyDialogOpen(false)}
      >
        <DialogHeader>
          <DialogTitle>Rotate key</DialogTitle>
          <DialogDescription>
            Make changes to your key here. Click save when you&apos;re done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
