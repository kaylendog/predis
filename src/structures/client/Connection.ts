import { EventEmitter } from "events";
import { ClientOpts, createClient, RedisClient } from "redis";

export class Connection extends EventEmitter {
	public url: string;

	public redis?: RedisClient;

	constructor(url: string) {
		super();
		this.url = url;
	}

	/**
	 * Create a connection to Redis.
	 */
	createConnection(opts: ClientOpts = {}): Promise<Connection> {
		return new Promise((resolve, reject) => {
			opts = Object.assign({ url: this.url }, opts);
			this.redis = createClient(opts);

			this.redis.once("connect", () => {
				this.emit("connect");
				resolve(this);
			});
			this.redis.once("error", (err) => {
				this.emit("error", err);
				reject(err);
			});
		});
	}
}
