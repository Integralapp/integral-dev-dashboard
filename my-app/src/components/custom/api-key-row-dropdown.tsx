import { ApiKey } from "@/app/page";
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { MoreHorizontal } from "lucide-react";
import { useState } from "react";
import { EditKeyDialog } from "./edit-key-dialog";
import { RotateKeyDialog } from "./rotate-key-dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { DeleteKeyDialog } from "./delete-key-dialog";

enum ApiKeyRowDropdownType {
  Edit,
  Rotate,
  Delete,
}

type Props = {
  apiKey: ApiKey;
};

export function ApiKeyRowDropdown({ apiKey }: Props) {
  const [dialogType, setDialogType] = useState<ApiKeyRowDropdownType>(
    ApiKeyRowDropdownType.Edit
  );

  return (
    <Dialog>
      {getDialogComponent(dialogType, apiKey)}

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0">
            <span className="sr-only">Open menu</span>
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Actions</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DialogTrigger asChild>
            <DropdownMenuItem
              onClick={() => setDialogType(ApiKeyRowDropdownType.Edit)}
            >
              Edit key
            </DropdownMenuItem>
          </DialogTrigger>
          <DialogTrigger asChild>
            <DropdownMenuItem
              onClick={() => setDialogType(ApiKeyRowDropdownType.Rotate)}
            >
              Rotate key
            </DropdownMenuItem>
          </DialogTrigger>

          <DialogTrigger asChild>
            <DropdownMenuItem
              onClick={() => setDialogType(ApiKeyRowDropdownType.Delete)}
            >
              Delete key
            </DropdownMenuItem>
          </DialogTrigger>
        </DropdownMenuContent>
      </DropdownMenu>
    </Dialog>
  );
}

function getDialogComponent(
  apiKeyRowDropdownType: ApiKeyRowDropdownType,
  apiKey: ApiKey
) {
  switch (apiKeyRowDropdownType) {
    case ApiKeyRowDropdownType.Edit:
      return <EditKeyDialog apiKey={apiKey} />;
    case ApiKeyRowDropdownType.Delete:
      return <DeleteKeyDialog apiKey={apiKey} />;
    case ApiKeyRowDropdownType.Rotate:
      return <RotateKeyDialog apiKey={apiKey} />;
  }
}
