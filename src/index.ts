#!/usr/bin/env node

export const VERSION = '0.1.0';
export const USAGE_MESSAGE = `gtmeta ${VERSION}

Usage:
  $ gtmeta <configFile> <outputFolder>

Arguments:
  configFile      The path to the config file
  outputFolder    The path to the output folder`;

/**
 * The main function.
 */
function main() {
	const [configPath, outputPath, ...otherArgs] = process.argv.slice(2);

	if (!configPath || !outputPath || otherArgs.length > 0) {
		console.info(USAGE_MESSAGE);
		process.exitCode = 1;
		return;
	}
}

main();
