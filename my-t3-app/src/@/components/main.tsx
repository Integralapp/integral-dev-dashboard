import ApiKeys from "./api-keys";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "./ui/card";

export default function Main() {
  return (
    <div className="container mx-auto py-10">
      <Card>
        <CardHeader>
          <CardTitle>API Keys</CardTitle>
          <CardDescription>
            These keys will allow you to authenticate API requests.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ApiKeys />
        </CardContent>
      </Card>
    </div>
  );
}
