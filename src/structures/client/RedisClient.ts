import { EventEmitter } from "events";

import { Model, ModelOptions } from "../Model";
import { Connection } from "./Connection";

/**
 * Client for interfacing with Redis.
 */
export class RedisClient extends EventEmitter {
	public connection: Connection;

	constructor() {
		super();

		this.connection = new Connection("");
	}

	/**
	 * Create a model.
	 */
	model<T extends any = any>(name: string, schema: T, opts: ModelOptions) {
		opts = Object.assign({ name }, opts);
		new Model(this, schema, opts);
	}

	/**
	 * Connect to Redis.
	 */
	async connect() {
		await this.connection.createConnection();
		return true;
	}
}
