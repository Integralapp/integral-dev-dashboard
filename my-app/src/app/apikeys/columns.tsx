"use client";

import { ColumnDef } from "@tanstack/react-table";
import { ApiKey } from "../page";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ApiKeyRowDropdown } from "@/components/custom/api-key-row-dropdown";

const TRUNCATED_KEY_CHAR_COUNT = 4;

export const columns: ColumnDef<ApiKey>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "key",
    header: "Key",
    cell: ({ row }) => {
      const key = row.getValue("key") as string;
      const truncatedKey =
        key.substring(0, TRUNCATED_KEY_CHAR_COUNT) +
        "..." +
        key.slice(TRUNCATED_KEY_CHAR_COUNT * -1);

      return (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger
              onClick={() => {
                navigator.clipboard.writeText(key);
              }}
            >
              {truncatedKey}
            </TooltipTrigger>
            <TooltipContent>
              <p>Click to copy</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      );
    },
  },
  {
    accessorKey: "lastUsed",
    header: "Last used",
  },
  {
    accessorKey: "createdAt",
    header: "Created",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const apiKey = row.original;
      return <ApiKeyRowDropdown apiKey={apiKey} />;
    },
  },
];
