import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import axios from "axios";
import { ExpiresInTimes } from "~/@/components/rotate-key-dialog";

export const ApiKeySchema = z.object({
  id: z.string(),
  createdAt: z.string(),
  lastUsed: z.string(),
  apiKey: z.string(),
  name: z.string(),
  expiresIn: z.nullable(z.string()),
});

export type ApiKeyType = z.infer<typeof ApiKeySchema>;

export const exampleRouter = createTRPCRouter({
  apiKeys: publicProcedure
    .input(z.object({ token: z.string(), applicationId: z.string() }))
    .output(z.array(ApiKeySchema))
    .query(async ({ input }) => {
      const { token, applicationId } = input;

      const response = await axios.get(
        "http://localhost:4000/dashboard/keys/list/production",
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Integral-Application-Id": applicationId,
          },
        }
      );
      return response.data as Array<ApiKeyType>;
    }),
  createApiKey: publicProcedure
    .input(
      z.object({
        token: z.string(),
        applicationId: z.string(),
        name: z.string(),
      })
    )
    .output(ApiKeySchema)
    .mutation(async ({ input: { token, applicationId, name } }) => {
      const response = await axios.post(
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

      return response.data as ApiKeyType;
    }),
  deleteApiKey: publicProcedure
    .input(
      z.object({
        token: z.string(),
        applicationId: z.string(),
        apiKey: z.string(),
      })
    )
    .output(ApiKeySchema)
    .mutation(async ({ input: { token, applicationId, apiKey } }) => {
      const response = await axios.delete(
        "http://localhost:4000/dashboard/keys/delete",
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Integral-Application-Id": applicationId,
          },
          data: {
            apiKey,
          },
        }
      );

      return response.data as ApiKeyType;
    }),
  rotateApiKey: publicProcedure
    .input(
      z.object({
        token: z.string(),
        applicationId: z.string(),
        apiKey: z.string(),
        expiresIn: z.nativeEnum(ExpiresInTimes),
      })
    )
    .output(ApiKeySchema)
    .mutation(
      async ({ input: { token, applicationId, apiKey, expiresIn } }) => {
        const response = await axios.post(
          "http://localhost:4000/dashboard/keys/rotate",
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

        return response.data as ApiKeyType;
      }
    ),
});
