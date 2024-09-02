import { describe, expect, it } from 'vitest';
import { VERSION } from '../logging.js';

describe('VERSION', () => {
	it('should match the package.json version', () => {
		expect(process.env['npm_package_version']).toBe(VERSION);
	});
});
