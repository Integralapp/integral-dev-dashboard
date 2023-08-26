import Head from "next/head";
import { api } from "~/utils/api";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  IconButton,
} from "@chakra-ui/react";
import { FiMoreHorizontal } from "react-icons/fi";

export default function Home() {
  const apiKeys = api.example.apiKeys.useQuery({
    token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBsaWNhdGlvblVzZXIiOnsiaWQiOiI4NGQwNzg2My1mY2ViLTQwOTEtYjQ2OC0wNTcyOWE1MjkxNmEiLCJjcmVhdGVkQXQiOiIyMDIzLTA1LTA3VDIxOjIwOjAxLjA4NloiLCJ1cGRhdGVkQXQiOiIyMDIzLTA1LTA3VDIxOjIwOjAxLjA4NloiLCJkZWxldGVkQXQiOm51bGwsImFwcGxpY2F0aW9uVXNlckZvcmVpZ25JZCI6InRlbXAtMSIsIm1ldGFkYXRhIjpudWxsfSwiYXBwbGljYXRpb24iOnsiaWQiOiIwZDgyZWNjMS00ZjRmLTRlZjYtYWY1Ni0wZmQ1MjFjZWNmNWUiLCJjcmVhdGVkQXQiOiIyMDIzLTA1LTA3VDE3OjUxOjA2Ljk1MFoiLCJ1cGRhdGVkQXQiOiIyMDIzLTA1LTA3VDE3OjUxOjA2Ljk1MFoiLCJkZWxldGVkQXQiOm51bGwsIm5hbWUiOiJTT1MiLCJkZXNjcmlwdGlvbiI6IlNvbWUgYXBwIiwicHVibGljSWQiOiJzb3MuMm04dlZ3UFZCSmNsRlA2R3BqMkxSUyIsIm9yZ2FuaXphdGlvbiI6eyJpZCI6IjgxOTYxNjE3LTc5ODktNGYwNC1hYTM3LTI1MDdlZDJhMTAxMiIsImNyZWF0ZWRBdCI6IjIwMjMtMDUtMDdUMTc6NTA6NDUuNTAyWiIsInVwZGF0ZWRBdCI6IjIwMjMtMDUtMDdUMTc6NTA6NDUuNTAyWiIsImRlbGV0ZWRBdCI6bnVsbCwibmFtZSI6IkhlbHAifSwiaXBSYXRlTGltaXQiOjEwLCJiYXNlVXJsIjp7ImlkIjoiNzAyOTBiZTEtYTZjMS00NTQyLTg0ZDAtNzJkYTllZWQ5MDI1IiwiY3JlYXRlZEF0IjoiMjAyMy0wNS0wN1QxNzo1MTowNi45NTBaIiwidXBkYXRlZEF0IjoiMjAyMy0wNS0wN1QxNzo1MTowNi45NTBaIiwiZGVsZXRlZEF0IjpudWxsLCJ1cmwiOiJodHRwczovL2dvb2dsZS5jb20ifSwiYW1vdW50UGVySW50ZXJ2YWwiOm51bGwsInRpbWVJbnRlcnZhbCI6IlNFQ09ORCJ9LCJpYXQiOjE2OTI5MjcxNTEsImV4cCI6MTY5NTUxOTE1MX0.evgcarxSehkfmVLCC4HYAWFvYiv5zNx0X-vTtBMjZ5o",
    applicationId: "sos.2m8vVwPVBJclFP6Gpj2LRS",
  });

  if (apiKeys.data) {
    console.log(apiKeys.data);
  }

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#ffffff] to-[#15162c]">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            Create <span className="text-[hsl(280,100%,70%)]">T3</span> App
          </h1>
          <TableContainer>
            <Table variant="simple">
              <TableCaption>Imperial to metric conversion factors</TableCaption>
              <Thead>
                <Tr>
                  <Th>Name</Th>
                  <Th>Key</Th>
                  <Th>Last Used</Th>
                  <Th>Created At</Th>
                  <Th />
                </Tr>
              </Thead>
              <Tbody>
                {(apiKeys.data ?? []).map((apiKey) => {
                  return (
                    <Tr key={apiKey.id}>
                      <Td>{apiKey.name}</Td>
                      <Td>{apiKey.apiKey}</Td>
                      <Td>{apiKey.lastUsed}</Td>
                      <Td>{apiKey.createdAt}</Td>
                      <Td>
                        <IconButton
                          size={"sm"}
                          icon={<FiMoreHorizontal />}
                          aria-label="More actions"
                        />
                      </Td>
                    </Tr>
                  );
                })}
              </Tbody>
            </Table>
          </TableContainer>
        </div>
      </main>
    </>
  );
}
