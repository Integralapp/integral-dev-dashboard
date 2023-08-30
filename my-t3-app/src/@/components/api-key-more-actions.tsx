import { useState } from "react";
import { Dialog, DialogTrigger } from "./ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { MoreHorizontal } from "lucide-react";
import type { ApiKey } from "~/server/api/routers/example";
import { EditKeyDialog } from "./edit-key-dialog";
import { DeleteKeyDialog } from "./delete-key-dialog";
import { RotateKeyDialog } from "./rotate-key-dialog";

enum ApiKeyRowDropdownType {
  Edit,
  Rotate,
  Delete,
}

type Props = {
  apiKey: ApiKey;
};

export function ApiKeyMoreActions({ apiKey }: Props) {
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
