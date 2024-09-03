import { describe, expect, it } from 'vitest';
import { USAGE_MESSAGE } from '../logging.js';
import { getExecDetails } from './utils/exec.js';

describe('dist/index.js', () => {
	it('should exit with code 1 if no arguments are provided', async () => {
		expect(await getExecDetails('node dist')).toEqual({
			exitCode: 1,
			stdout: USAGE_MESSAGE,
			stderr: '',
		});
	});

	it('should exit with code 1 if only one argument is provided', async () => {
		expect(await getExecDetails('node dist arg1')).toEqual({
			exitCode: 1,
			stdout: USAGE_MESSAGE,
			stderr: '',
		});
	});

	it('should exit with code 1 if more than two arguments are provided', async () => {
		expect(await getExecDetails('node dist arg1 arg2 arg3')).toEqual({
			exitCode: 1,
			stdout: USAGE_MESSAGE,
			stderr: '',
		});
	});

	it('should exit with code 1 if the config path is invalid', async () => {
		expect(await getExecDetails('node dist invalid-path arg2')).toEqual({
			exitCode: 1,
			stdout: '',
			stderr: [
				'error Failed to read config file',
				"error ENOENT: no such file or directory, open 'invalid-path'",
			].join('\n'),
		});
	});

	it('should exit with code 1 if the config file is not valid JSON', async () => {
		expect(
			await getExecDetails('node dist examples/invalid-json.json arg2'),
		).toEqual({
			exitCode: 1,
			stdout: '',
			stderr: [
				'error Failed to parse config file as JSON',
				'error Unexpected token \'T\', "This is a "... is not valid JSON',
			].join('\n'),
		});
	});

	it('should exit with code 0 if valid arguments are provided', async () => {
		expect(
			await getExecDetails('node dist examples/minimal.json arg2'),
		).toEqual({
			exitCode: 0,
			stdout: '',
			stderr: '',
		});
	});
});
