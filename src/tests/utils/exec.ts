import { exec } from 'node:child_process';

/**
 * The details of a shell command execution.
 */
interface ExecDetails {
	/**
	 * The exit code.
	 */
	exitCode: number;
	/**
	 * The standard output.
	 */
	stdout: string;
	/**
	 * The standard error.
	 */
	stderr: string;
}

/**
 * Executes a shell command and returns a Promise resolving to the exit code,
 * standard output, and standard error.
 * @param command - The command
 * @returns A Promise resolving to the details of the execution
 */
export async function getExecDetails(command: string) {
	return new Promise<ExecDetails>((resolve) => {
		exec(command, (error, stdout, stderr) =>
			resolve({
				exitCode: error?.code ?? 0,
				stdout: stdout.slice(0, -1),
				stderr: stderr.slice(0, -1),
			}),
		);
	});
}
