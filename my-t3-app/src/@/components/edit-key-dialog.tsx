import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { useToast } from "./ui/use-toast";
import { Loader2 } from "lucide-react";
import { type ApiKeyType } from "~/hooks/useGetApiKeys";
import { useUpdateApiKey } from "~/hooks/useUpdateApiKey";
import { mutate } from "swr";

type Props = {
  apiKey: ApiKeyType;
  isOpen: boolean;
  setIsEditKeyDialogOpen: (isOpen: boolean) => void;
  token: string;
  applicationId: string;
};

export function EditKeyDialog({
  apiKey,
  isOpen,
  setIsEditKeyDialogOpen,
  token,
  applicationId,
}: Props) {
  const [name, setName] = useState<string>(apiKey.name ?? "");

  const { toast } = useToast();
  const { loading, error, trigger } = useUpdateApiKey(
    token,
    applicationId,
    apiKey.apiKey,
    name,
    () => {
      void mutate("http://localhost:4000/dashboard/keys/list/production");
      setIsEditKeyDialogOpen(false);
      toast({
        description: "Updated API Key!",
        duration: 1500,
      });
    }
  );

  const handleUpdate = async () => {
    if (name.length != 0) {
      await trigger();
    }
  };

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
          <Button
            variant="secondary"
            disabled={loading}
            onClick={() => setIsEditKeyDialogOpen(false)}
          >
            Cancel
          </Button>

          {loading ? (
            <Button disabled>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Updating...
            </Button>
          ) : (
            <Button
              type="submit"
              disabled={name.length === 0}
              onClick={() => void handleUpdate()}
            >
              Save
            </Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
