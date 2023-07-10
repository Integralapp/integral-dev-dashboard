import { ApiKey } from "@/app/page";
import { Button } from "@/components/ui/button";
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

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
