/// <reference types="next" />
/// <reference types="next/types/global" />

declare namespace NodeJS {
	interface Process {
		readonly browser: boolean;
	}

	interface ProcessEnv {
		readonly AWS_USER_KEY_ID: string;
		readonly AWS_USER_SECRET: string;
	}
}
