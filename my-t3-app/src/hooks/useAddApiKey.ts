import useSWRMutation, { type TriggerWithoutArgs } from "swr/mutation";
import { type Key } from "swr";
import axios from "axios";

const addApiKey = async (
  url: string,
  token: string,
  applicationId: string,
  name: string
): Promise<void> => {
  await axios.post(
    "http://localhost:4000/dashboard/keys/create",
    {
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

export function useAddApiKey(
  token: string,
  applicationId: string,
  name: string,
  onSuccess: () => void
): {
  data: void | undefined;
  error: Error | undefined;
  loading: boolean;
  trigger: TriggerWithoutArgs<void, Error, Key, never>;
} {
  const { data, error, isMutating, trigger } = useSWRMutation<void, Error>(
    "http://localhost:4000/dashboard/keys/create",
    (url: string) => addApiKey(url, token, applicationId, name),
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
