import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { ApiKeyMoreActions } from "./api-key-more-actions";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { useToast } from "./ui/use-toast";
import { ApiKeyNameCell } from "./api-key-name-cell";
import { Skeleton } from "./ui/skeleton";
import { useGetApiKeys } from "~/hooks/useGetApiKeys";

const TRUNCATED_KEY_CHAR_COUNT = 4;

type Props = {
  token: string;
  applicationId: string;
};

export default function ApiKeys({ token, applicationId }: Props) {
  const { toast } = useToast();
  const { data, loading } = useGetApiKeys(token, applicationId);
  const apiKeys = data ?? [];

  return (
    <div>
      <Table className="rounded-lg border">
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Key</TableHead>
            <TableHead>Last Used</TableHead>
            <TableHead>Created At</TableHead>
            <TableHead />
          </TableRow>
        </TableHeader>
        <TableBody>
          {apiKeys.map((apiKey) => {
            const key = apiKey.apiKey;
            const truncatedKey =
              key.substring(0, TRUNCATED_KEY_CHAR_COUNT) +
              "..." +
              key.slice(TRUNCATED_KEY_CHAR_COUNT * -1);

            return (
              <TableRow key={apiKey.id}>
                <TableCell>
                  <ApiKeyNameCell
                    name={apiKey.name}
                    expiresIn={apiKey.expiresIn}
                  />
                </TableCell>
                <TableCell>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger
                        onClick={() => {
                          navigator.clipboard
                            .writeText(key)
                            .then(() => {
                              toast({
                                description: "Copied key!",
                                duration: 1500,
                              });
                            })
                            .catch(() => {
                              toast({
                                variant: "destructive",
                                description: "Something went wrong.",
                                duration: 1500,
                              });
                            });
                        }}
                      >
                        {truncatedKey}
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Click to copy</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </TableCell>
                <TableCell>{apiKey.lastUsed}</TableCell>
                <TableCell>{apiKey.createdAt}</TableCell>
                <TableCell className="text-right">
                  <ApiKeyMoreActions
                    apiKey={apiKey}
                    token={token}
                    applicationId={applicationId}
                    isApiKeyExpiring={apiKey.expiresIn != null}
                  />
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>

      {loading && (
        <div className="flex-col justify-center p-8 text-center">
          <div className="grow flex-row">
            <Skeleton className="h-10 w-full" />
          </div>
        </div>
      )}

      {apiKeys.length === 0 && !loading && (
        <div className="flex-col justify-center p-8 text-center">
          <div className="grow flex-row">
            <p className="text-sm font-bold">No API Keys</p>
            <p className="text-sm text-muted-foreground">
              Add API Keys to see them here!
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
