import * as chai from "chai";

import { RedisClient } from "../src";

// Enable should globally.
chai.should();

describe("Client tests", () => {
	describe("Constructor", () => {
		it("should return valid client object", () => {
			const client = new RedisClient();
			return client.should.be.instanceOf(RedisClient);
		});
	});
});
