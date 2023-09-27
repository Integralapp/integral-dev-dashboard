import useSWRMutation, { type TriggerWithoutArgs } from "swr/mutation";
import { type Key } from "swr";
import axios from "axios";
import { type ExpiresInTimes } from "~/@/components/rotate-key-dialog";

const rotateApiKey = async (
  url: string,
  token: string,
  applicationId: string,
  apiKey: string,
  expiresIn: ExpiresInTimes
): Promise<void> => {
  await axios.post(
    url,
    {
      apiKey,
      expiresIn,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Integral-Application-Id": applicationId,
      },
    }
  );
};

export function useRotateApiKey(
  token: string,
  applicationId: string,
  apiKey: string,
  expiresIn: ExpiresInTimes,
  onSuccess: () => void
): {
  data: void | undefined;
  error: Error | undefined;
  loading: boolean;
  trigger: TriggerWithoutArgs<void, Error, Key, never>;
} {
  const { data, error, isMutating, trigger } = useSWRMutation<void, Error>(
    "http://localhost:4000/dashboard/keys/rotate",
    (url: string) => rotateApiKey(url, token, applicationId, apiKey, expiresIn),
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
