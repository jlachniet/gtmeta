#!/usr/bin/env node

import { readFile } from 'fs/promises';
import { Logger } from './logging.js';

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

	try {
		configRaw = await readFile(configPath, 'utf-8');
	} catch (error) {
		Logger.error('Failed to read config file');
		Logger.error((error as NodeJS.ErrnoException).message);
		process.exitCode = 1;
		return;
	}
}

main();
