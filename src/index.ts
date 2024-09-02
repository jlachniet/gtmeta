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
export function main() {
	console.info(USAGE_MESSAGE);
}

main();
