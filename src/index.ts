#!/usr/bin/env node

import { readFile } from 'fs/promises';
import { z, ZodError } from 'zod';
import { Logger } from './logging.js';
import { ConfigSchema } from './schema/config.js';

/**
 * The main function.
 */
async function main() {
	const [configPath, outputPath, ...otherArgs] = process.argv.slice(2);

	if (!configPath || !outputPath || otherArgs.length > 0) {
		Logger.usage();
		process.exitCode = 1;
		return;
	}

	let configRaw: string;
	let configJsonParsed: unknown;
	let config: z.infer<typeof ConfigSchema>;

	try {
		configRaw = await readFile(configPath, 'utf-8');
	} catch (error) {
		Logger.error('Failed to read config file');
		Logger.error((error as NodeJS.ErrnoException).message);
		process.exitCode = 1;
		return;
	}

	try {
		configJsonParsed = JSON.parse(configRaw);
	} catch (error) {
		Logger.error('Failed to parse config file as JSON');
		Logger.error((error as SyntaxError).message);
		process.exitCode = 1;
		return;
	}

	try {
		config = ConfigSchema.parse(configJsonParsed);
	} catch (error) {
		Logger.error('Invalid config file');
		Logger.error((error as ZodError).message);
		process.exitCode = 1;
		return;
	}
}

main();
