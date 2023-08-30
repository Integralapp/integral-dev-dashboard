import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import axios from "axios";

export type ApiKey = {
  id: string;
  createdAt: string;
  lastUsed: string;
  apiKey: string;
  name: string;
};

export const exampleRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),
  apiKeys: publicProcedure
    .input(z.object({ token: z.string(), applicationId: z.string() }))
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
      const apiKeys = response.data as Array<ApiKey>;
      return apiKeys;
    }),
});
