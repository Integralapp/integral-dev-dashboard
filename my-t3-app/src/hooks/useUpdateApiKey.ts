import useSWRMutation, { type TriggerWithoutArgs } from "swr/mutation";
import { type Key } from "swr";
import axios from "axios";

const updateApiKey = async (
  url: string,
  token: string,
  applicationId: string,
  apiKey: string,
  name: string
): Promise<void> => {
  await axios.post(
    url,
    {
      apiKey,
      name,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Integral-Application-Id": applicationId,
      },
    }
  );
};

export function useUpdateApiKey(
  token: string,
  applicationId: string,
  apiKey: string,
  name: string,
  onSuccess: () => void
): {
  data: void | undefined;
  error: Error | undefined;
  loading: boolean;
  trigger: TriggerWithoutArgs<void, Error, Key, never>;
} {
  const { data, error, isMutating, trigger } = useSWRMutation<void, Error>(
    "http://localhost:4000/dashboard/keys/update-name",
    (url: string) => updateApiKey(url, token, applicationId, apiKey, name),
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
