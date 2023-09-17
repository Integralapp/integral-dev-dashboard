import { useState } from "react";
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
import type { ApiKeyType } from "~/server/api/routers/example";
import { EditKeyDialog } from "./edit-key-dialog";
import { DeleteKeyDialog } from "./delete-key-dialog";
import { RotateKeyDialog } from "./rotate-key-dialog";

enum ApiKeyRowDropdownType {
  None,
  Edit,
  Rotate,
  Delete,
}

type Props = {
  apiKey: ApiKeyType;
  token: string;
  applicationId: string;
  isApiKeyExpiring?: boolean;
};

export function ApiKeyMoreActions({
  apiKey,
  token,
  applicationId,
  isApiKeyExpiring = false,
}: Props) {
  const [dialogType, setDialogType] = useState<ApiKeyRowDropdownType>(
    ApiKeyRowDropdownType.None
  );

  return (
    <>
      <EditKeyDialog
        isOpen={dialogType === ApiKeyRowDropdownType.Edit}
        apiKey={apiKey}
        setIsEditKeyDialogOpen={(isOpen: boolean) => {
          setDialogType(
            isOpen ? ApiKeyRowDropdownType.Edit : ApiKeyRowDropdownType.None
          );
        }}
      />
      <DeleteKeyDialog
        isOpen={dialogType === ApiKeyRowDropdownType.Delete}
        apiKey={apiKey}
        token={token}
        applicationId={applicationId}
        setIsDeleteKeyDialogOpen={(isOpen: boolean) => {
          setDialogType(
            isOpen ? ApiKeyRowDropdownType.Delete : ApiKeyRowDropdownType.None
          );
        }}
      />
      <RotateKeyDialog
        isOpen={dialogType === ApiKeyRowDropdownType.Rotate}
        apiKey={apiKey}
        token={token}
        applicationId={applicationId}
        setIsRotateKeyDialogOpen={(isOpen: boolean) => {
          setDialogType(
            isOpen ? ApiKeyRowDropdownType.Rotate : ApiKeyRowDropdownType.None
          );
        }}
      />
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
          {isApiKeyExpiring === false ? (
            <>
              <DropdownMenuItem
                onClick={() => setDialogType(ApiKeyRowDropdownType.Edit)}
              >
                Edit key
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => setDialogType(ApiKeyRowDropdownType.Rotate)}
              >
                Rotate key
              </DropdownMenuItem>
            </>
          ) : null}

          <DropdownMenuItem
            onClick={() => setDialogType(ApiKeyRowDropdownType.Delete)}
          >
            Delete key
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
