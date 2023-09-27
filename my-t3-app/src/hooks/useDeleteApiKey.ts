import useSWRMutation, { type TriggerWithoutArgs } from "swr/mutation";
import { type Key } from "swr";
import axios from "axios";

const deleteApiKey = async (
  url: string,
  token: string,
  applicationId: string,
  apiKey: string
): Promise<void> => {
  await axios.delete(url, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Integral-Application-Id": applicationId,
    },
    data: {
      apiKey,
    },
  });
};

export function useDeleteApiKey(
  token: string,
  applicationId: string,
  apiKey: string,
  onSuccess: () => void
): {
  data: void | undefined;
  error: Error | undefined;
  loading: boolean;
  trigger: TriggerWithoutArgs<void, Error, Key, never>;
} {
  const { data, error, isMutating, trigger } = useSWRMutation<void, Error>(
    "http://localhost:4000/dashboard/keys/delete",
    (url: string) => deleteApiKey(url, token, applicationId, apiKey),
    {
      onSuccess: onSuccess,
    }
  );

  return {
    data,
    error,
    loading: isMutating,
    trigger,
  };
}
