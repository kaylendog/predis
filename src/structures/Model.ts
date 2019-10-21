import { RedisClient } from "./client/RedisClient";

export interface ModelOptions {
	name: string;
}

/**
 * Represents a data structure in the database.
 */
export class Model<T> {
	// public client: RedisClient;
	// public options: ModelOptions;
	// public schema: T;

	constructor(client: RedisClient, schema: T, opts: ModelOptions) {}

	async save() {}
}
