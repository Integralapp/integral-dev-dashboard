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
import { Toaster } from "./ui/toaster";

type Props = {
  token: string;
  applicationId: string;
};

export default function ApiKeyComponent({ applicationId, token }: Props) {
  const [isAddKeyDialogOpen, setIsAddKeyDialogOpen] = useState<boolean>(false);

  return (
    <>
      <Toaster />
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
              token={token}
              applicationId={applicationId}
              setIsAddKeyDialogOpen={setIsAddKeyDialogOpen}
              isOpen={isAddKeyDialogOpen}
            />
          </CardHeader>
          <CardContent>
            <ApiKeys applicationId={applicationId} token={token} />
          </CardContent>
        </Card>
      </div>
    </>
  );
}
