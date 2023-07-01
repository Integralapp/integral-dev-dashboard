import { ApiKey } from "../page";
import { columns } from "./columns";
import { DataTable } from "./data-table";

async function getData(): Promise<ApiKey[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      name: "first",
      key: "app-wdjmek32k4m2kdmk3dm2k3",
      lastUsed: "-",
      createdAt: "Feb 22, 2022",
    },
    {
      id: "489e1d42",
      name: "second",
      key: "app-kwem23kmfowiemdokwemjd",
      lastUsed: "-",
      createdAt: "Feb 22, 2022",
    },
  ];
}

export default async function DemoPage() {
  const data = await getData();

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
