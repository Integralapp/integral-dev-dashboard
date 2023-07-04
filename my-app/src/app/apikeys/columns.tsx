"use client";

import { ColumnDef } from "@tanstack/react-table";
import { ApiKey } from "../page";
import { MoreHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";

import { EditKeyDialog } from "@/components/custom/edit-key-dialog";

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

      return (
        <Dialog>
          <EditKeyDialog apiKey={apiKey} />
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
                <DropdownMenuItem>Edit key</DropdownMenuItem>
              </DialogTrigger>
              <DropdownMenuItem>Rotate key</DropdownMenuItem>
              <DropdownMenuItem>Delete key</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </Dialog>
      );
    },
  },
];
