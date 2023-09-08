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
            applicationId="exa.3iIYtEcNcxF3AMfKCIF3d6"
            token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBsaWNhdGlvblVzZXIiOnsiaWQiOiIzYTNhZjgwOC1lZTJmLTQwZTktYTcwNC01ZGU5NjJkMWFjNDgiLCJjcmVhdGVkQXQiOiIyMDIzLTA5LTA2VDAwOjMyOjA4LjkxN1oiLCJ1cGRhdGVkQXQiOiIyMDIzLTA5LTA2VDAwOjMyOjA4LjkxN1oiLCJkZWxldGVkQXQiOm51bGwsImFwcGxpY2F0aW9uVXNlckZvcmVpZ25JZCI6InRlc3QtMTIiLCJtZXRhZGF0YSI6bnVsbH0sImFwcGxpY2F0aW9uIjp7ImlkIjoiZjRmNTYwZjctZDQ3NC00ZDA0LWFlMzktMzJhZTdjY2I4MGU3IiwiY3JlYXRlZEF0IjoiMjAyMy0wOS0wNlQwMDozMTo1My45OTFaIiwidXBkYXRlZEF0IjoiMjAyMy0wOS0wNlQwMDozMTo1My45OTFaIiwiZGVsZXRlZEF0IjpudWxsLCJuYW1lIjoiRXhhbSIsImRlc2NyaXB0aW9uIjoiIiwicHVibGljSWQiOiJleGEuM2lJWXRFY05jeEYzQU1mS0NJRjNkNiIsIm9yZ2FuaXphdGlvbiI6eyJpZCI6IjI2NjU0OWUwLTZhN2QtNGJlOS1iOTYwLTA5MzhiZjljYzUwZCIsImNyZWF0ZWRBdCI6IjIwMjMtMDktMDZUMDA6MzE6MTQuMjI2WiIsInVwZGF0ZWRBdCI6IjIwMjMtMDktMDZUMDA6MzE6MTQuMjI2WiIsImRlbGV0ZWRBdCI6bnVsbCwibmFtZSI6IlRlc3QifSwiaXBSYXRlTGltaXQiOjEwLCJiYXNlVXJsIjp7ImlkIjoiNTFjNTg4YWItM2Y2YS00OGMzLWI4YzMtNDBlODY0OTIwYWNkIiwiY3JlYXRlZEF0IjoiMjAyMy0wOS0wNlQwMDozMTo1My45OTFaIiwidXBkYXRlZEF0IjoiMjAyMy0wOS0wNlQwMDozMTo1My45OTFaIiwiZGVsZXRlZEF0IjpudWxsLCJ1cmwiOiJodHRwczovL2dvb2dsZS5jb20ifSwiYW1vdW50UGVySW50ZXJ2YWwiOm51bGwsInRpbWVJbnRlcnZhbCI6IlNFQ09ORCJ9LCJpYXQiOjE2OTM5NjE1MjAsImV4cCI6MTY5NjU1MzUyMH0.jg3EA5Bqya5LUQ4ePleGxUGA0ydXCvbeDCjRDtyQRfA"
          />
        </CardContent>
      </Card>
    </div>
  );
}
