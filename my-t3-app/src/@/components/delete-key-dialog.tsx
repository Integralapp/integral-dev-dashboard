import type { ApiKeyType } from "~/server/api/routers/example";
import {
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogContent,
  DialogDescription,
} from "./ui/dialog";
import { DialogClose } from "@radix-ui/react-dialog";
import { Button } from "./ui/button";

type Props = {
  apiKey: ApiKeyType;
};

export function DeleteKeyDialog({ apiKey: _apiKey }: Props) {
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
        <Button type="submit" variant="destructive">
          Confirm delete
        </Button>
      </DialogFooter>
    </DialogContent>
  );
}
