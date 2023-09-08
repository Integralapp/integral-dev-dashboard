import { api } from "~/utils/api";
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

const TRUNCATED_KEY_CHAR_COUNT = 4;

type Props = {
  token: string;
  applicationId: string;
};

export default function ApiKeys({ token, applicationId }: Props) {
  const { toast } = useToast();
  const apiKeys = api.example.apiKeys.useQuery({
    token,
    applicationId,
  });

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
          {(apiKeys.data ?? []).map((apiKey) => {
            const key = apiKey.apiKey;
            const truncatedKey =
              key.substring(0, TRUNCATED_KEY_CHAR_COUNT) +
              "..." +
              key.slice(TRUNCATED_KEY_CHAR_COUNT * -1);

            return (
              <TableRow key={apiKey.id}>
                <TableCell className="font-medium">{apiKey.name}</TableCell>
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
                  <ApiKeyMoreActions apiKey={apiKey} />
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>

      {apiKeys.data && apiKeys.data.length === 0 && (
        <div className="flex-col justify-center p-8 text-center">
          <div className="grow flex-row">
            <p className="text-sm font-bold">No Api Keys</p>
            <p className="text-sm text-muted-foreground">
              Add Api Keys to see them here!
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
