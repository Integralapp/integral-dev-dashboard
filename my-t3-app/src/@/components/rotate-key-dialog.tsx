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
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { api } from "~/utils/api";
import { useToast } from "./ui/use-toast";
import { Loader2 } from "lucide-react";

export enum ExpiresInTimes {
  Now = "now",
  OneHour = "1h",
  TwentyFourHours = "24h",
  ThreeDays = "3d",
  SevenDays = "7d",
}

type Props = {
  apiKey: ApiKeyType;
  isOpen: boolean;
  token: string;
  applicationId: string;
  setIsRotateKeyDialogOpen: (isOpen: boolean) => void;
};

export function RotateKeyDialog({
  apiKey,
  setIsRotateKeyDialogOpen,
  isOpen,
  token,
  applicationId,
}: Props) {
  const [expiresIn, setExpiresIn] = useState<ExpiresInTimes | null>(null);

  const { toast } = useToast();
  const apiContext = api.useContext();

  const rotateApiKey = api.example.rotateApiKey.useMutation({
    onSuccess: async () => {
      await apiContext.example.apiKeys.invalidate();
      setIsRotateKeyDialogOpen(false);
      toast({
        description: "Rotated API Key!",
        duration: 1500,
      });
    },
  });

  const handleRotate = () => {
    if (expiresIn != null) {
      rotateApiKey.mutate({
        token,
        applicationId,
        apiKey: apiKey.apiKey,
        expiresIn,
      });
    }
  };

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
            Choose an expiry time for your key.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-row items-center">
          <Label htmlFor="expires in" className="pr-4">
            Expiration
          </Label>
          <Select onValueChange={(e) => setExpiresIn(e as ExpiresInTimes)}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select expiration" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value={ExpiresInTimes.Now}>now</SelectItem>
              <SelectItem value={ExpiresInTimes.OneHour}>in 1 hour</SelectItem>
              <SelectItem value={ExpiresInTimes.TwentyFourHours}>
                in 24 hours
              </SelectItem>
              <SelectItem value={ExpiresInTimes.ThreeDays}>
                in 3 days
              </SelectItem>
              <SelectItem value={ExpiresInTimes.SevenDays}>
                in 7 days
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
        <DialogFooter>
          <Button
            variant="secondary"
            disabled={rotateApiKey.isLoading}
            onClick={() => setIsRotateKeyDialogOpen(false)}
          >
            Cancel
          </Button>

          {rotateApiKey.isLoading ? (
            <Button disabled>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Rotating...
            </Button>
          ) : (
            <Button
              type="submit"
              disabled={expiresIn === null}
              onClick={handleRotate}
            >
              Rotate
            </Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
