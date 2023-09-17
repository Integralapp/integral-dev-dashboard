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
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { api } from "~/utils/api";
import { useToast } from "./ui/use-toast";
import { Loader2 } from "lucide-react";

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
  const apiContext = api.useContext();

  const updateApiKeyName = api.example.updateApiKeyName.useMutation({
    onSuccess: async () => {
      await apiContext.example.apiKeys.invalidate();
      setIsEditKeyDialogOpen(false);
      toast({
        description: "Updated API Key!",
        duration: 1500,
      });
    },
  });

  const handleUpdate = () => {
    updateApiKeyName.mutate({
      token,
      applicationId,
      apiKey: apiKey.apiKey,
      name,
    });
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
            disabled={updateApiKeyName.isLoading}
            onClick={() => setIsEditKeyDialogOpen(false)}
          >
            Cancel
          </Button>

          {updateApiKeyName.isLoading ? (
            <Button disabled>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Updating...
            </Button>
          ) : (
            <Button
              type="submit"
              disabled={name.length === 0}
              onClick={handleUpdate}
            >
              Save
            </Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
