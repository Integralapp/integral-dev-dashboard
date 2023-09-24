import { Plus } from "lucide-react";
import ApiKeys from "./api-keys";
import { Button } from "./ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "./ui/card";
import { AddKeyDialog } from "./add-key-dialog";
import { useState } from "react";

const APPLICATION_ID = "exa.3iIYtEcNcxF3AMfKCIF3d6";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBsaWNhdGlvblVzZXIiOnsiaWQiOiIzYTNhZjgwOC1lZTJmLTQwZTktYTcwNC01ZGU5NjJkMWFjNDgiLCJjcmVhdGVkQXQiOiIyMDIzLTA5LTA2VDAwOjMyOjA4LjkxN1oiLCJ1cGRhdGVkQXQiOiIyMDIzLTA5LTA2VDAwOjMyOjA4LjkxN1oiLCJkZWxldGVkQXQiOm51bGwsImFwcGxpY2F0aW9uVXNlckZvcmVpZ25JZCI6InRlc3QtMTIiLCJtZXRhZGF0YSI6bnVsbH0sImFwcGxpY2F0aW9uIjp7ImlkIjoiZjRmNTYwZjctZDQ3NC00ZDA0LWFlMzktMzJhZTdjY2I4MGU3IiwiY3JlYXRlZEF0IjoiMjAyMy0wOS0wNlQwMDozMTo1My45OTFaIiwidXBkYXRlZEF0IjoiMjAyMy0wOS0wNlQwMDozMTo1My45OTFaIiwiZGVsZXRlZEF0IjpudWxsLCJuYW1lIjoiRXhhbSIsImRlc2NyaXB0aW9uIjoiIiwicHVibGljSWQiOiJleGEuM2lJWXRFY05jeEYzQU1mS0NJRjNkNiIsIm9yZ2FuaXphdGlvbiI6eyJpZCI6IjI2NjU0OWUwLTZhN2QtNGJlOS1iOTYwLTA5MzhiZjljYzUwZCIsImNyZWF0ZWRBdCI6IjIwMjMtMDktMDZUMDA6MzE6MTQuMjI2WiIsInVwZGF0ZWRBdCI6IjIwMjMtMDktMDZUMDA6MzE6MTQuMjI2WiIsImRlbGV0ZWRBdCI6bnVsbCwibmFtZSI6IlRlc3QifSwiaXBSYXRlTGltaXQiOjEwLCJiYXNlVXJsIjp7ImlkIjoiNTFjNTg4YWItM2Y2YS00OGMzLWI4YzMtNDBlODY0OTIwYWNkIiwiY3JlYXRlZEF0IjoiMjAyMy0wOS0wNlQwMDozMTo1My45OTFaIiwidXBkYXRlZEF0IjoiMjAyMy0wOS0wNlQwMDozMTo1My45OTFaIiwiZGVsZXRlZEF0IjpudWxsLCJ1cmwiOiJodHRwczovL2dvb2dsZS5jb20ifSwiYW1vdW50UGVySW50ZXJ2YWwiOm51bGwsInRpbWVJbnRlcnZhbCI6IlNFQ09ORCJ9LCJpYXQiOjE2OTM5NjE1MjAsImV4cCI6MTY5NjU1MzUyMH0.jg3EA5Bqya5LUQ4ePleGxUGA0ydXCvbeDCjRDtyQRfA";

export default function ApiKeyComponent() {
  const [isAddKeyDialogOpen, setIsAddKeyDialogOpen] = useState<boolean>(false);

  return (
    <div className="container mx-auto py-10">
      <Card>
        <CardHeader className="flex-row">
          <div className="grow flex-row">
            <CardTitle>API Keys</CardTitle>
            <CardDescription>
              These keys will allow you to authenticate API requests.
            </CardDescription>
          </div>
          <Button onClick={() => setIsAddKeyDialogOpen(true)}>
            <Plus className="mr-2 h-4 w-4" /> Add API Key
          </Button>
          <AddKeyDialog
            token={TOKEN}
            applicationId={APPLICATION_ID}
            setIsAddKeyDialogOpen={setIsAddKeyDialogOpen}
            isOpen={isAddKeyDialogOpen}
          />
        </CardHeader>
        <CardContent>
          <ApiKeys applicationId={APPLICATION_ID} token={TOKEN} />
        </CardContent>
      </Card>
    </div>
  );
}
