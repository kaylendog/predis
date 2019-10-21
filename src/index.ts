import { RedisClient } from "./structures/client/RedisClient";

const client = new RedisClient();

export const connect = () => client.connect;

export const model = (...args: any[]) => client.model(args);
