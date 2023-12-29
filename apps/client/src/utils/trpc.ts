import { createTRPCReact, httpBatchLink } from "@trpc/react-query";
import type { AppRouter } from "@fst/server/src/router";

export const trpc = createTRPCReact<AppRouter>();
