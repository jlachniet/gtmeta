import chalk from 'chalk';

export const VERSION = '0.1.0';
export const USAGE_MESSAGE = `gtmeta ${VERSION}

Usage:
  $ gtmeta <configFile> <outputFolder>

Arguments:
  configFile      The path to the config file
  outputFolder    The path to the output folder`;

/**
 * An object containing methods for logging.
 */
export const Logger = {
	/**
	 * Logs the usage message.
	 */
	usage: () => console.info(USAGE_MESSAGE),
	/**
	 * Logs an error message.
	 * @param message - The message
	 */
	error: (message: string) => console.error(`${chalk.red('error')} ${message}`),
};
