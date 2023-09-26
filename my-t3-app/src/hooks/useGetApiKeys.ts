import useSWR from "swr";
import { z } from "zod";

export const ApiKeySchema = z.object({
  id: z.string(),
  createdAt: z.string(),
  lastUsed: z.string(),
  apiKey: z.string(),
  name: z.string(),
  expiresIn: z.nullable(z.string()),
});

export type ApiKeyType = z.infer<typeof ApiKeySchema>;

const fetchWithToken = async (
  url: string,
  token: string,
  applicationId: string
): Promise<ApiKeyType[]> => {
  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Integral-Application-Id": applicationId,
    },
  });
  return (await response.json()) as ApiKeyType[];
};

export function useGetApiKeys(
  token: string,
  applicationId: string
): {
  data: ApiKeyType[] | undefined;
  error: Error | undefined;
  loading: boolean;
} {
  const { data, error, isLoading } = useSWR<ApiKeyType[], Error>(
    "http://localhost:4000/dashboard/keys/list/production",
    (url: string) => fetchWithToken(url, token, applicationId)
  );

  return {
    data,
    error,
    loading: isLoading,
  };
}
