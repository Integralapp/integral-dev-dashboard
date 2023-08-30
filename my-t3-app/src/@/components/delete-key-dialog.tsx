import { Button } from "@chakra-ui/react";
import type { ApiKey } from "~/server/api/routers/example";
import {
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogContent,
  DialogDescription,
} from "./ui/dialog";
import { DialogClose } from "@radix-ui/react-dialog";

type Props = {
  apiKey: ApiKey;
};

export function DeleteKeyDialog({ apiKey }: Props) {
  return (
    <DialogContent className="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>Delete key</DialogTitle>
        <DialogDescription>
          Click confirm to delete the key. This action is irreversible.
        </DialogDescription>
      </DialogHeader>
      <DialogFooter>
        <DialogClose asChild>
          <Button variant="secondary">Cancel</Button>
        </DialogClose>
        <Button type="submit">Confirm delete</Button>
      </DialogFooter>
    </DialogContent>
  );
}
