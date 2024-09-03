import chalk from 'chalk';
import { describe, expect, it, vi } from 'vitest';
import { Logger, USAGE_MESSAGE, VERSION } from '../logging.js';

describe('VERSION', () => {
	it('should match the package.json version', () => {
		expect(process.env['npm_package_version']).toBe(VERSION);
	});
});

describe('Logger', () => {
	describe('usage', () => {
		it('should log the usage message', () => {
			const consoleInfoSpy = vi.spyOn(console, 'info');

			Logger.usage();
			expect(consoleInfoSpy).toHaveBeenCalledWith(USAGE_MESSAGE);
		});
	});

	describe('error', () => {
		it('should log an error message', () => {
			const consoleErrorSpy = vi.spyOn(console, 'error');

			Logger.error('message');
			expect(consoleErrorSpy).toHaveBeenCalledWith(
				`${chalk.red('error')} message`,
			);
		});
	});
});
