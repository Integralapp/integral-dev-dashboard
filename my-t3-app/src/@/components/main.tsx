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
          <ApiKeys
            applicationId="sos.2m8vVwPVBJclFP6Gpj2LRS"
            token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBsaWNhdGlvblVzZXIiOnsiaWQiOiI4NGQwNzg2My1mY2ViLTQwOTEtYjQ2OC0wNTcyOWE1MjkxNmEiLCJjcmVhdGVkQXQiOiIyMDIzLTA1LTA3VDIxOjIwOjAxLjA4NloiLCJ1cGRhdGVkQXQiOiIyMDIzLTA1LTA3VDIxOjIwOjAxLjA4NloiLCJkZWxldGVkQXQiOm51bGwsImFwcGxpY2F0aW9uVXNlckZvcmVpZ25JZCI6InRlbXAtMSIsIm1ldGFkYXRhIjpudWxsfSwiYXBwbGljYXRpb24iOnsiaWQiOiIwZDgyZWNjMS00ZjRmLTRlZjYtYWY1Ni0wZmQ1MjFjZWNmNWUiLCJjcmVhdGVkQXQiOiIyMDIzLTA1LTA3VDE3OjUxOjA2Ljk1MFoiLCJ1cGRhdGVkQXQiOiIyMDIzLTA1LTA3VDE3OjUxOjA2Ljk1MFoiLCJkZWxldGVkQXQiOm51bGwsIm5hbWUiOiJTT1MiLCJkZXNjcmlwdGlvbiI6IlNvbWUgYXBwIiwicHVibGljSWQiOiJzb3MuMm04dlZ3UFZCSmNsRlA2R3BqMkxSUyIsIm9yZ2FuaXphdGlvbiI6eyJpZCI6IjgxOTYxNjE3LTc5ODktNGYwNC1hYTM3LTI1MDdlZDJhMTAxMiIsImNyZWF0ZWRBdCI6IjIwMjMtMDUtMDdUMTc6NTA6NDUuNTAyWiIsInVwZGF0ZWRBdCI6IjIwMjMtMDUtMDdUMTc6NTA6NDUuNTAyWiIsImRlbGV0ZWRBdCI6bnVsbCwibmFtZSI6IkhlbHAifSwiaXBSYXRlTGltaXQiOjEwLCJiYXNlVXJsIjp7ImlkIjoiNzAyOTBiZTEtYTZjMS00NTQyLTg0ZDAtNzJkYTllZWQ5MDI1IiwiY3JlYXRlZEF0IjoiMjAyMy0wNS0wN1QxNzo1MTowNi45NTBaIiwidXBkYXRlZEF0IjoiMjAyMy0wNS0wN1QxNzo1MTowNi45NTBaIiwiZGVsZXRlZEF0IjpudWxsLCJ1cmwiOiJodHRwczovL2dvb2dsZS5jb20ifSwiYW1vdW50UGVySW50ZXJ2YWwiOm51bGwsInRpbWVJbnRlcnZhbCI6IlNFQ09ORCJ9LCJpYXQiOjE2OTI5MjcxNTEsImV4cCI6MTY5NTUxOTE1MX0.evgcarxSehkfmVLCC4HYAWFvYiv5zNx0X-vTtBMjZ5o"
          />
        </CardContent>
      </Card>
    </div>
  );
}
