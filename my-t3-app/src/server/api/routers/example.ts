import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import axios from "axios";

export const ApiKeySchema = z.object({
  id: z.string(),
  createdAt: z.string(),
  lastUsed: z.string(),
  apiKey: z.string(),
  name: z.nullable(z.string()),
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
});
