import { useState } from "react";
import type { ApiKeyType } from "~/server/api/routers/example";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { DialogClose } from "@radix-ui/react-dialog";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Input } from "./ui/input";

type Props = {
  apiKey: ApiKeyType;
  isOpen: boolean;
  setIsEditKeyDialogOpen: (isOpen: boolean) => void;
};

export function EditKeyDialog({
  apiKey,
  isOpen,
  setIsEditKeyDialogOpen,
}: Props) {
  const [name, setName] = useState<string>(apiKey.name ?? "");

  return (
    <Dialog open={isOpen}>
      <DialogContent
        className="sm:max-w-[425px]"
        onPointerDownOutside={() => setIsEditKeyDialogOpen(false)}
        onCrossClick={() => setIsEditKeyDialogOpen(false)}
      >
        <DialogHeader>
          <DialogTitle>Edit key</DialogTitle>
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
          <DialogClose asChild>
            <Button type="submit">Save changes</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
