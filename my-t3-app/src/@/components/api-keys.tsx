import { api } from "~/utils/api";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { MoreHorizontal } from "lucide-react";
import { Button } from "./ui/button";

const TRUNCATED_KEY_CHAR_COUNT = 4;

export default function ApiKeys() {
  const apiKeys = api.example.apiKeys.useQuery({
    token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBsaWNhdGlvblVzZXIiOnsiaWQiOiI4NGQwNzg2My1mY2ViLTQwOTEtYjQ2OC0wNTcyOWE1MjkxNmEiLCJjcmVhdGVkQXQiOiIyMDIzLTA1LTA3VDIxOjIwOjAxLjA4NloiLCJ1cGRhdGVkQXQiOiIyMDIzLTA1LTA3VDIxOjIwOjAxLjA4NloiLCJkZWxldGVkQXQiOm51bGwsImFwcGxpY2F0aW9uVXNlckZvcmVpZ25JZCI6InRlbXAtMSIsIm1ldGFkYXRhIjpudWxsfSwiYXBwbGljYXRpb24iOnsiaWQiOiIwZDgyZWNjMS00ZjRmLTRlZjYtYWY1Ni0wZmQ1MjFjZWNmNWUiLCJjcmVhdGVkQXQiOiIyMDIzLTA1LTA3VDE3OjUxOjA2Ljk1MFoiLCJ1cGRhdGVkQXQiOiIyMDIzLTA1LTA3VDE3OjUxOjA2Ljk1MFoiLCJkZWxldGVkQXQiOm51bGwsIm5hbWUiOiJTT1MiLCJkZXNjcmlwdGlvbiI6IlNvbWUgYXBwIiwicHVibGljSWQiOiJzb3MuMm04dlZ3UFZCSmNsRlA2R3BqMkxSUyIsIm9yZ2FuaXphdGlvbiI6eyJpZCI6IjgxOTYxNjE3LTc5ODktNGYwNC1hYTM3LTI1MDdlZDJhMTAxMiIsImNyZWF0ZWRBdCI6IjIwMjMtMDUtMDdUMTc6NTA6NDUuNTAyWiIsInVwZGF0ZWRBdCI6IjIwMjMtMDUtMDdUMTc6NTA6NDUuNTAyWiIsImRlbGV0ZWRBdCI6bnVsbCwibmFtZSI6IkhlbHAifSwiaXBSYXRlTGltaXQiOjEwLCJiYXNlVXJsIjp7ImlkIjoiNzAyOTBiZTEtYTZjMS00NTQyLTg0ZDAtNzJkYTllZWQ5MDI1IiwiY3JlYXRlZEF0IjoiMjAyMy0wNS0wN1QxNzo1MTowNi45NTBaIiwidXBkYXRlZEF0IjoiMjAyMy0wNS0wN1QxNzo1MTowNi45NTBaIiwiZGVsZXRlZEF0IjpudWxsLCJ1cmwiOiJodHRwczovL2dvb2dsZS5jb20ifSwiYW1vdW50UGVySW50ZXJ2YWwiOm51bGwsInRpbWVJbnRlcnZhbCI6IlNFQ09ORCJ9LCJpYXQiOjE2OTI5MjcxNTEsImV4cCI6MTY5NTUxOTE1MX0.evgcarxSehkfmVLCC4HYAWFvYiv5zNx0X-vTtBMjZ5o",
    applicationId: "sos.2m8vVwPVBJclFP6Gpj2LRS",
  });

  return (
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
              <TableCell>{truncatedKey}</TableCell>
              <TableCell>{apiKey.lastUsed}</TableCell>
              <TableCell>{apiKey.createdAt}</TableCell>
              <TableCell className="text-right">
                <Button variant="outline" size="icon">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}
