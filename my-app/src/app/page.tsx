import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export type ApiKey = {
  id: string;
  name: string;
  key: string;
  lastUsed: string;
  createdAt: string;
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Card>
        <CardHeader>
          <CardTitle>Api Keys</CardTitle>
          <CardDescription>
            These keys will allow you to authenticate API requests.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
      </Card>
    </main>
  );
}
