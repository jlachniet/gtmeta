import { describe, expect, it, vi } from 'vitest';
import { main, USAGE_MESSAGE, VERSION } from '../index.js';

describe('VERSION', () => {
	it('should match the package.json version', () => {
		expect(process.env['npm_package_version']).toBe(VERSION);
	});
});

describe('main()', () => {
	const consoleLogSpy = vi.spyOn(console, 'info');

	it('should log the usage message', () => {
		main();
		expect(consoleLogSpy).toHaveBeenCalledWith(USAGE_MESSAGE);
	});
});
