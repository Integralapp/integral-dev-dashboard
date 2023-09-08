import { useState } from "react";
import {
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Input } from "./ui/input";

import { api } from "~/utils/api";
import { Loader2 } from "lucide-react";

type Props = {
  token: string;
  applicationId: string;
  setIsAddKeyDialogOpen: (isOpen: boolean) => void;
};

export function AddKeyDialog({
  token,
  applicationId,
  setIsAddKeyDialogOpen,
}: Props) {
  const [name, setName] = useState<string>("");
  const apiContext = api.useContext();

  const createApiKey = api.example.createApiKey.useMutation({
    onSuccess: async () => {
      await apiContext.example.apiKeys.invalidate();
      setIsAddKeyDialogOpen(false);
    },
  });

  const handleCreate = () => {
    createApiKey.mutate({ token, applicationId, name });
  };

  return (
    <DialogContent className="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>Add API Key</DialogTitle>
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
          onClick={() => setIsAddKeyDialogOpen(false)}
        >
          Cancel
        </Button>
        {createApiKey.isLoading ? (
          <Button disabled>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Creating...
          </Button>
        ) : (
          <Button type="submit" onClick={handleCreate}>
            Create
          </Button>
        )}
      </DialogFooter>
    </DialogContent>
  );
}
