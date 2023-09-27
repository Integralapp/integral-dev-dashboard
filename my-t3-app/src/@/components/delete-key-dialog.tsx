import type { ApiKeyType } from "~/server/api/routers/example";
import {
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogContent,
  DialogDescription,
  Dialog,
} from "./ui/dialog";
import { DialogClose } from "@radix-ui/react-dialog";
import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";
import { useToast } from "./ui/use-toast";
import { useDeleteApiKey } from "~/hooks/useDeleteApiKey";
import { mutate } from "swr";

type Props = {
  apiKey: ApiKeyType;
  token: string;
  applicationId: string;
  isOpen: boolean;
  setIsDeleteKeyDialogOpen: (isOpen: boolean) => void;
};

export function DeleteKeyDialog({
  apiKey,
  token,
  applicationId,
  isOpen,
  setIsDeleteKeyDialogOpen,
}: Props) {
  const { toast } = useToast();

  const { loading, error, trigger } = useDeleteApiKey(
    token,
    applicationId,
    apiKey.apiKey,
    () => {
      void mutate("http://localhost:4000/dashboard/keys/list/production");
      setIsDeleteKeyDialogOpen(false);
      toast({
        description: "Deleted API Key!",
        duration: 1500,
      });
    }
  );

  const handleDelete = async () => {
    await trigger();
  };

  return (
    <Dialog open={isOpen}>
      <DialogContent
        className="sm:max-w-[425px]"
        onPointerDownOutside={() => setIsDeleteKeyDialogOpen(false)}
        onCrossClick={() => setIsDeleteKeyDialogOpen(false)}
      >
        <DialogHeader>
          <DialogTitle>Delete key</DialogTitle>
          <DialogDescription>
            Click confirm to delete the key. This action is irreversible.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button
              variant="secondary"
              disabled={loading}
              onClick={() => setIsDeleteKeyDialogOpen(false)}
            >
              Cancel
            </Button>
          </DialogClose>

          {loading ? (
            <Button disabled>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Deleting...
            </Button>
          ) : (
            <Button
              type="submit"
              variant="destructive"
              onClick={() => void handleDelete()}
            >
              Confirm delete
            </Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
