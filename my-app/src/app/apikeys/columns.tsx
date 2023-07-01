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
      return (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger
              onClick={() => {
                navigator.clipboard.writeText(key);
              }}
            >
              {key}
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
      // const apiKey = row.original;

      return (
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
            <DropdownMenuItem>Edit key</DropdownMenuItem>
            <DropdownMenuItem>Rotate key</DropdownMenuItem>
            <DropdownMenuItem>Delete key</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
