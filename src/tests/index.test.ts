import { describe, expect, it } from 'vitest';
import { USAGE_MESSAGE, VERSION } from '../index.js';
import { getExecDetails } from './utils/exec.js';

describe('VERSION', () => {
	it('should match the package.json version', () => {
		expect(process.env['npm_package_version']).toBe(VERSION);
	});
});

describe('dist/index.js', () => {
	it('should exit with code 1 and log the usage message if no arguments are provided', async () => {
		expect(await getExecDetails('node dist')).toEqual({
			exitCode: 1,
			stdout: USAGE_MESSAGE,
			stderr: '',
		});
	});

	it('should exit with code 1 and log the usage message if only one argument is provided', async () => {
		expect(await getExecDetails('node dist arg1')).toEqual({
			exitCode: 1,
			stdout: USAGE_MESSAGE,
			stderr: '',
		});
	});

	it('should exit with code 1 and log the usage message if more than two arguments are provided', async () => {
		expect(await getExecDetails('node dist arg1 arg2 arg3')).toEqual({
			exitCode: 1,
			stdout: USAGE_MESSAGE,
			stderr: '',
		});
	});

	it('should exit with code 1 and log the usage message if two arguments are provided', async () => {
		expect(await getExecDetails('node dist arg1 arg2')).toEqual({
			exitCode: 0,
			stdout: '',
			stderr: '',
		});
	});
});
