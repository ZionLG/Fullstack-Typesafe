import { fastifyTRPCPlugin } from "@trpc/server/adapters/fastify";
import fastify from "fastify";
import cors from "@fastify/cors";
import { createContext } from "./context";
import { appRouter } from "./router";
import type { VercelRequest, VercelResponse } from '@vercel/node'

import * as dotenv from "dotenv";
dotenv.config();

const server = fastify({
  maxParamLength: 5000,
  logger:true,
});
server.register(cors, {
  // put your options here
});

server.register(fastifyTRPCPlugin, {
  prefix: "/trpc",
  useWSS: false,
  trpcOptions: { router: appRouter, createContext },
});

export default async (req: VercelRequest, res: VercelResponse) => {
  await server.ready();
  server.server.emit('request', req, res);
}